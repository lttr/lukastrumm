---
title: AI on the comand line
date: 2025-09-04
tags:
  - ai-tools
  - claude
  - command-line
---
Using AI tools on the command line leverages the elegance of UNIX utilities. The power of these programs lies in composability—each program has a specific focus, and you can chain the output of one as input to another.

---

Creating new such programs is convenient with AI command line tools, which can perform smart tricks that are difficult to automate otherwise. Here are some examples of how I use it. I use `claude -p`, which is the _headless_ mode of Claude Code, though similar functionality exists with tools from other providers.

Headless mode runs Claude Code non-interactively, executing a single prompt and outputting results directly to the terminal. This enables seamless integration into scripts and automation workflows without manual interaction.

## Headless Claude in action

### Quickly generate commit in a repo, no questions asked

From time to time I don't care about the commit message but still want to commit from the command line after making changes.

It's important to note that Claude adds itself as a co-author of the commit, which may or may not be desirable. The `--allowedTools` flag specifies which tool calls Claude can use without asking.

```bash
claude --allowedTools 'Bash(git add:*),Bash(git commit:*)' -p 'just commit, no questions asked'
```

I use a wrapper script called [aic](https://github.com/lttr/dotfiles/blob/master/scripts/ai-tools/aic.sh).

### Generate a Bash command

This one is awesome since it combines the strength of AI with deterministic tools. Often I only need to be reminded about a few flags for a utility tool I haven't used in a while.

I use the alias [aix](https://github.com/lttr/dotfiles/blob/master/scripts/ai-tools/aix.sh). The linked script outputs an explanation of the desired command, and the command itself is placed on the command line using `xdotool`.

```bash
claude -p "You are a command line expert. Given a task, respond with a oneliner, that can be executed in Bash shell and would satisfy task instructions. I value readable output, long variant of arguments. DO output 2 lines: first line with short explanation of its arguments and second line with the oneliner command. Never output markdown.
<example>
List directory contents [ls -l] a long listing format [ls -t] sort by modification time, newest first
ls -lt
</example>
Task: ... your description of a command ...
"
```

### Quick questions when terminal is closer than chat window

For one-off questions, it might be all you need. Keep in mind though that in this bare form it might not have the needed context.

I have an alias `ai="claude -p"`.

```bash
ai "latest nuxt release notes"
```

### Analyze data in a way that is not possible by hand

The pattern goes like:

```bash
retrieve-my-data-somehow | ai "analyze ..."
```

Specific example: fetch Bluesky posts in a Nuxt feed and analyze the sentiment. There might potentially be a lot of data on the input, therefore a cheaper model (here Haiku) might be appropriate.

```bash
curl -s 'https://public.api.bsky.app/xrpc/app.bsky.feed.getFeed?feed=at://did:plc:jbeaa5kdaladzwq3r7f5xgwe/app.bsky.feed.generator/nuxt' | jq '.feed[].post.record.text' | claude --model haiku -p "analyze overall sentiment of these posts"
```

### Self healing linting

Lint stuff that's hard to lint using programmatic linters. A candidate for running in CI, but I'm not there yet. This checks for typos, but easily extends with other forms of linting.

For example, in the scope of a Vue.js or Nuxt project with more junior team members: `Report inappropriate usage of composables`

```bash
claude -p "You are a linter. Look at the changes vs main and report any issues related to typos. Follow strictly UNIX error format. Do not return any other text.
<example>
foo.js:5:10: Unexpected foo. [Error/foo]
bar.js:6:11: Unexpected bar. [Warning/bar]
</example>
"
```

Then pipe the output into a file to check one by one in an editor (`tee` is here to see the output and save into a file at the same time, `nvim` stands for neovim, an editor of my choice).

```bash
... | tee linting-errors.txt
nvim -q linting-errors.txt
```

Or let AI fix it:

```bash
... | claude --permission-mode acceptEdit -p "fix errors"
```

### Executive summary for dependencies upgrade

I use this before updating dependencies. I typically start with `pnpm outdated`. This script makes finding release notes and understanding them faster, especially for side projects where the process doesn't need to be rigorous.

Here `find-release-notes` is a script that generates lists of release notes for outdated packages, covering their major and minor versions (from pnpm and GitHub).

Claude tends to jump straight into action, so the `--permission-mode plan` flag prevents Claude from editing files or calling pnpm.

```bash
find-release-notes | claude --permission-mode plan -p "What should I do to upgrade to these versions successfully? Do not upgrade yourself just tell me about important changes in dependencies."
```

You can find the script on my Github [find-release-notes.js](https://github.com/lttr/dotfiles/blob/master/scripts/web/find-release-notes.js).


## Aliases and scripts which I use

As with any prompting, these tools can be made much more effective or autonomous with proper prompt and context engineering. The auto commit utility can be instructed to follow specific commit message patterns and linted with regular expressions. Or the linting utility can cover many rules.

My goal was to incorporate the simple approach into my day-to-day work, not to create sophisticated programs that won't be used. Well at least this time.

If you are interested, these are my current command line aliases (see implementation on my [github](https://github.com/lttr/dotfiles/tree/master/scripts/ai-tools)):
- `ai` - execute prompt directly using Claude Code
- `aic` - git commit message generation
- `ailint` - code linting and suggestions, currently looking for typos
- `aitokens` - estimate number of tokens in files to be input in AI
- `aix` - generate commands

## Conclusion

These techniques lower the friction between Unix tools and AI tools. The non-interactivity might be limiting, but it's perfect for focused tasks where you need intelligence without conversation.