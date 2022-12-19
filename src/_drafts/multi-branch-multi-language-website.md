---
title: Multi branch, multi language website
date: 2022-12-15
tags:
  - websites
---

At the beginning of 2021, which is already almost two years ago, my team and I
have started working on a rather large website. The requirements were
interesting... and as it usually happens they have changed quite significantly
during implementation.

---

## What we got

The initial requirements for the set of websites were roughly these:

- You will be provided with custom designs for components and pages, the result
  should match perfectly
- The company has a set of branches and every branch will need its own website,
  possibly in multiple languages (!)
- Most of the content but not all (!) will be the same
- The design must be the same and editors should have very little room for
  diverging from the original design
- All (!) content should be editable by editors, ideally in a WYSIWYG way,
  stored in a CMS

## What we had

A small team and a lot to explain. The deadline can't be in two month, please.

So we started with prototyping right away. We set first milestone for us to make
a decision about framework, tools and the CMS in 14 days. The first bets looked
promising and we quickly converged to these technologies:

- Storyblok as a headless CMS
- Nuxt 2 as the framework
- Bootstrap for its styling internals
- Gitlab for pipelines
- Azure for hosting

Let's briefly discuss every building block

### CMS

Storyblok has very nice compromise between structured and visual editing of the
content. The documentation and integration with VueJS ecosystem were great. We
also liked other features like multi language support, the flexibility of the
content structure, fast CDN based content delivery and built in image
processing.

### Nuxt

Most of our team's frontend experience were with VueJS, so Nuxt was a natural
choice. The initial requirements looked suitable for a static site builder or a
Jamstack like solution, but we knew it might be challenged in the future and
Nuxt will be ready for that. And it was challenged, but more about that later.

### Bootstrap and SASS

The styling looked like a big portion of the whole project. The choice for using
Bootstrap and Sass were again based on over experience. We used only some parts
of the Bootstrap internals and Sass utilities. It was led to a quick start.

### Gitlab

Gitlab pipelines became a central part of our solution since we focused on
static generating. While there is nothing bad about Gitlab pipelines
specifically it became the weakest point of the whole system because it was
overused. Data fetching, caching, monorepo tooling and any other logic can be
solved much easier in an application than in a build pipeline.

### Azure

It was a requirement to use Azure, but unfortunately I don't remember how it
happened. We spent unreasonable amount of time configuring Azure CDNs and
deployment. Something like a Netlify site would be done 10 times faster.

## What went wrong

- CMS structure, components
- pipelines
- amount of updates per day
- huge css
- not mature tools (Nuxt)
- slow builds
- redeployment

## What was a success

- custom styling
- editing

## What is the future

- transitional web apps
