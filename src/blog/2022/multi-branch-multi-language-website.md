---
title: Multi-branch, multi-language website
date: 2022-12-15
tags:
  - websites
---

At the beginning of 2021, which is already almost two years ago, my team and I
have started working on a rather large website. The requirements were
interesting... and as it usually happens they have changed quite significantly
during implementation.

---

I am going to tell a story about one project where I learned a lot of things.
The project was not a failure, we managed to deliver the solution and it runs in
production, but I will focus on what went wrong. In another article I might
focus on how much the technological landscape has changed in two years and
how a similar solution could be better in the future.

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

A small team and a lot to explain. The deadline can't be in two months, please.

So we started with prototyping right away. We set first milestone for us to make
a decision about framework, tools and the CMS in 14 days. The first bets looked
promising and we quickly converged to these technologies:

- Storyblok as a headless CMS
- Nuxt 2 as the framework
- Bootstrap for its styling internals
- Gitlab for pipelines
- Azure for hosting

Let's briefly discuss every building block.

### CMS

Storyblok has very nice compromise between structured and visual editing of the
content. The documentation and integration with VueJS ecosystem were great. We
also liked other features like multi-language support, the flexibility of the
content structure, fast CDN based content delivery and built in image
processing.

### Nuxt

Most of our team's frontend experience were with VueJS, so Nuxt was a natural
choice. The initial requirements looked suitable for a static site builder or a
Jamstack like solution, but we knew it might be challenged in the future and
Nuxt will be ready for that. And it was challenged, but more about that later.

### Bootstrap and SASS

The styling looked like a big portion of the whole project. The choice to use
Bootstrap and Sass were again based on our experience. We used only some parts
of the Bootstrap internals and Sass utilities. It led us to a quick start.

### Gitlab

Gitlab pipelines became a central part of our solution since we focused on
static generation. While there is nothing bad about Gitlab pipelines
specifically it became the weakest point of the entire system because it was
overused. Data fetching, caching, monorepo tooling and any other logic can be
solved much easier in an application than in a build pipeline.

### Azure

It was a requirement to use Azure, but unfortunately I don't remember how it
happened. We spent unreasonable amount of time configuring Azure CDNs and
deployment. Something like a Netlify site would be done 10 times faster.

## What went wrong

Let me start from the end. Unfortunately, the contract between companies ended
unexpectedly, and we were not able to pay the technical debt back as we
developers would like to do. Sometimes we have to say 'It is good enough.'

First challange was the know-how. I was quite new to a team/tech leader role,
while other colleages were even new to software development. At the same time
our customer didn't have a good understanding about the scope of the project.
For example communication with other branches of the company took a long time.
These challanges led to very poor estimations. The go-live deadline was
postponed several month. That might be a common situation on bigger software
projects, but this time it happened mostly due to missed expectations on
multiple fronts and lack of information from the client.

### CMS

One of the big ideas that we wanted to implement was to have a set of
components, that would hold the same concepts for business people, for the CMS,
as well as for developers. Good example would be a Steps component, which
represents a series of steps one have to follow in other to achieve something.
Every step has a number, a title and a description. An easy concept that can work
for designers, developers and editors. Although we have strived to communicate
it well and show it live in a styleguide to everyone, it was still difficult
to achieve consistency. Storyblok, our CMS of choice, have a concept of a
component. But it is all about discipline to avoid having 4 different Steps
components in the CMS mapping to 3 different components in code. And then some
one needs a 6-step component where so far every aspect of the design of this
component was based on the fact that it can only have a maximum of 5 steps.

I would say that we could do two things to improve this situation. One is to
have a set of shared principles not only between a designer and a developer but
also between business people and editors. Reminds me of Domain driven design and
ubiquitous language. Apparently it can be helpful even in the field of building
websites.

The other thing is automation. We could implement an automated check for
component mapping accross the system, the APIs are waiting to be used...

### SEO, CSS, performance

Styling went mostly well, the

- huge css
- not mature tools (Nuxt)

### Updating a static site

- pipelines
- amount of updates per day
- slow builds
- redeployment

## What was a success

The site was down maybe once because of some DNS issues, but never because of
infrastructure or code bug. Nothing can beat a web statically hosted from a CDN.

We have managed to implement very nice design system. That is mostly designer's
credit because she shared with us a set of principles and design tokens that we
have followed all the time. We have created a set of sass variables, utility
classes and base components as building blocks for everything else. That worked
great.

Another great experiance was the integration with Storyblok.

## What is the future

- transitional web apps
