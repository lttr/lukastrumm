---
title: Working with correct versions of tools in the JavaScript ecosystem
date: 2023-04-03
tags:
  - dependency-management
  - javascript
  - npm
---

The ideal is to have the desired version of every tool at every situation during both development and deployment. Docker might be the answer for someone, but it might not be practical to use it all the time. Let's analyze the situation.

---

There is an initiative called [devcontainers](https://containers.dev) to improve the practicality of the docker solution, but I'm not going to discuss that in this article.

## Definitions

By **tool,** I mean the runtime (like `nodejs`), package manager (like `pnpm`), and others (`docker`, `git`, and other CLI tools).

By **situation,** I mean running your first command after `git clone`, running a command after switching `git branch`, or running a command in a `CI/CD` pipeline.

### There are several levels of perfection

1. Nothing. When something breaks, someone might fix it.
2. Documentation. README.md. After following the docs carefully, a developer should be on the correct version of tools. Extra communication is necessary when updating versions.
3. Enforcement. There is configuration in place which forces certain tool versions and refuses to operate otherwise.
4. Automagic. The environment (either local or in CI) is set up in such a way, that it automatically uses (and installs before) correct versions of tools as configured. Might be harder to achieve without extra maintenance and documentation.

Based on these options, I think there is no ideal solution.

For small or personal projects (1) may be enough.
For projects, that are not actively developed, (2) may be appropriate.
When issues with incorrect versions occurs, it is time to make some safeguards (3).
For larger teams or larger amount of projects per developer, it might be beneficial to invest into automation (4).

## How to

A lot of the times it is enough to specify the major version. Like `node 18`, `yarn 1` etc. I personally run into most issues because of switching between projects that uses different major versions of tools.

### Use the correct version in CI/CD

CI/CD needs to be configured in code, ideally in the same repo as the rest of the application code. That way, the definition of versions are closer between local and production environment. One might choose to use `docker` to make sure, that the whole environment is the same, but it is not always practical (might be slower for local development, might not fit the app architecture, might require unnecessary know-how).

### Use the correct version of the runtime

I will focus on `nodejs` versions. One might soon need to deal with other runtimes like `deno` or `bun`, but leave that for another time.

To enforce a valid version you can use the `engines` field in `package.json`.

```json
"engines": { "node": ">=18" }
```

That will inform you about wrong version, but it does not do anything about it. What you want is a tool that installs and/or switches to the correct version whenever you switch directories on your command line.

First, you configure the desired version. Something like this (I use this with `fnm`, but different tools need different configuration):

```bash
node --version > .node-version
```

And then setup a tool and your command line shell. Some options:

- [fnm](https://github.com/Schniz/fnm) is simple
- [volta](https://docs.volta.sh/) can manage node, package manager and other tools from NPM
- [asdf](https://asdf-vm.com/) is good when you need to handle more languages

### Use the correct package manager

You can go far with a set of shell aliases or functions. I have recently switched to using [@antfu/ni](https://github.com/antfu/ni) and it is way better. You can stop warring about the package manager a given project is using from now.

### Use the correct version of the package manager

This is more tricky, but using the `engines` field in `package.json` can enforce a version range.

```json
"engines": {
	"node": ">=18",
	"pnpm": ">=7"
}
```

Corepack (mentioned below) should improve this point in the future.

### Use the correct versions of formatting, linting and building tools

Define them as `devDependencies` and use them via `scripts`. Like `nr build` from `@antfu/ni`.

Careful about running them ad hoc, there are a lot of details behind commands like `npm exec`, `npm x`, `npx` , `pnpm dlx`, `pnpm exec`, ...

## Alternatives and the future

### Helper NPM packages

There are NPM packages that might help (e.g. [only-allow](https://github.com/pnpm/only-allow)). The problem is that it might not work all the time (looking at GitHub issues...) and it is an extra dependency.

### Package manager policies

If you are using `yarn` a lot, it might be worth looking it its version enforcement solution, which is [documented here](https://classic.yarnpkg.com/en/docs/cli/policies/#toc-policies-set-version).

### Corepack

[Corepack](https://nodejs.org/api/corepack.html) probably will be the way to go---it will manage the versions of package managers for you, using `"packageManager"` field in `package.json`. It is still experimental and various tools might not work with it yet.

## Conclusion

The JavaScript ecosystem is moving fast. If you want to be up to date you need tooling that help you keep your sanity. With tooling that I have described in this article, you can forget about some aspects of dependency management---and that is a good thing.
