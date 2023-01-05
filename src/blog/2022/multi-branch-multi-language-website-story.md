---
title: Multi-branch, multi-language website story
date: 2022-12-30
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
production, but I will focus on what went wrong.

## What we got

The initial requirements for the set of websites were roughly these:

- You will be provided with custom designs for components and pages, the result
  should match perfectly
- The company has a set of branches and every branch will need its own website,
  possibly in multiple languages (!)
- Most of the content but not all (!) will be the same
- The design must be the same for every website and editors should have very
  little room for diverging from the original design
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

First challenge was the know-how. I was quite new to a team/tech leader role,
while other colleagues were even new to software development. At the same time
our customer didn't have a good understanding about the scope of the project.
For example communication with other branches of the company took a long time.
For a long time there was nobody who understands requirements well. These
challenges led to very poor estimations. The go-live deadline was postponed
several months.

### CMS

One of the big ideas that we wanted to implement was to have a set of
components, that would hold the same concept for business people, for the CMS,
as well as for developers. Good example would be a Steps component, which
represents a series of steps one have to follow in order to achieve something.
Every step has a number, a title and a description. A concept that can work for
designers, developers and editors. Although we have strived to communicate it
well and show it live in a styleguide to everyone, it was still difficult to
achieve consistency. Storyblok, our CMS of choice, have a concept of a
component. But it is all about discipline to avoid having 4 different Steps
components in the CMS mapping to 3 different components in code. And then
someone needs a 6-step component where so far every aspect of the design of this
component was based on the fact that it can only have a maximum of 5 steps.

I would say that we could do two things to improve this situation. One is to
have a set of shared principles not only between a designer and a developer but
also between business people and editors. Reminds me of Domain driven design and
ubiquitous language. Apparently it can be helpful even in the field of building
websites.

The other thing is automation. We could implement an automated check for
component mapping accross the system, the APIs are waiting to be used...

The last part is documentation. While Storyblok has mostly great docs, there
were some missing guidance for building a large, complex website with multiple
languages.

We have also struggled with one late requirement from the client---to use
Storyblok for writing blog posts, that are enhanced with custom components. At
the time of building the site it was not really possible to have both clean
editing experience and using our own Vue components to build the articles. The
issue is that editors typically support either editing content in fixed page
structure, completely free form page building or writing mostly text, links and
maybe some images (think of CKEditor). We needed something in between where it
would still be acceptable for non-technical editors to create consistent and
rich blog posts.

### SEO, performance, CSS

One problematic part was that our client, despite our effort, was reluctant to
give as any input about how performant the site should be and how much we should
focus on SEO. Making a website performant and SEO friendly takes time and has to
be planned. It is important to set some expectations up front, otherwise there
might be some unpleasant surprises. And there were, since we had to prioritize
other things than performance and SEO to meet deadlines.

The performance part was a bit problematic because of Nuxt. At version 2 it was
a great framework for applications, but the frontend had too much Javascript
even in full static generation mode.

Search functionality was another half-baked feature that we have shipped. The
decision was to have at least some search and don't spend much time with it
rather than involving 3rd party service or a sophisticated backend. This decision
was made based on an idea that visitors come from Google anyway. So the internal
search was based on build in Nuxt/content package, which has a client side
search. Yeah, it means downloading an index in json, which has several
megabytes. A poor man's solution that worked OK in some situations.

The SEO is a lot of little things that are easier to manage if someone plan to
do them up front. Correct HTTP status codes in all special cases, canonical
urls, handcrafted metadata, etc. etc. We had to go back and improve all of
these in later stages of the project when we got enough agreement and
necessary information.

Styling went mostly well, but there was one area, that we have underestimated.
We have produced unnecessarily big CSS bundles because we were not careful
enough with generating helper classes. When we noticed the problem it was too
late to purge all the redundant styles easily. It was about the time when the
tooling for Tailwind started to be great, it's a pity... We might have been ok,
if we had handcrafted all the CSS. Even with a huge help from VueJS with scoped
styles, it is hard to keep it on the right track when several new developers
start committing at the same time.

### Updating a static site

A big misconception we had was about frequency of updates. What first looked
like a mostly static site turned out not to be so.

Static site generation meant (at least for Nuxt at that time) a full rebuild of
the whole site for every code or data change. It might not be a concern running
a 5-minute build couple times a day. But as the pipeline grows the build and
deploy no longer takes 5 minutes but may take 15. And a couple of websites times
a couple of code, data and CMS changes results in too much work the pipelines
has to do in one day. And resulted in unexpected slowdowns in delivery.

Nuxt can be switched to SSR mode with minimal code changes. Unfortunately
because of our infrastructure and for historical reasons we were not able to use
it during the time we had.

Frequent redeployments have another issue. The CDN, caching and Javascript in
the browser has to be setup in such a way so that new deployments are
transparent for the user of the website and does not cause missing assets or
other errors. At the same time it should reasonably cache everything it can to
speed up page load time. The Nuxt SSG site is served as HTML for the initial
page load but is immediately enhanced with Javascript and becomes a single page
application. At the time we had issues making this SPA to be refreshed if a
deployment happened while a user was browsing the website. We had to write some
rather hacky code to improve the situation (involving a forced full page
reload).

## What was a success

As far as I know the site was down maybe once because of some DNS issues, but
never because of infrastructure or code bug. Nothing can beat a web statically
hosted from a CDN.

We have managed to implement very nice design system. That is mostly designer's
credit because she shared with us a set of principles and design tokens that we
have followed all the time. We have created a set of sass variables, utility
classes and base components as building blocks for everything else. That worked
great.

Another great experience was the integration with Storyblok. Its API was flexible
and fast and most of the tasks were straight forward. For example, we needed to
be notified when there was a change published in a subset of the site and that
was convenient with their webhooks.

## What is the future

Rich Harris called it Transitional web apps in one of his
[presentations](https://www.youtube.com/watch?v=860d8usGC0o). The idea is to
extract the best characteristics of multipage architecture and single page apps
into one solution that is, well, transitional. We have used Vue framework which
helped more junior members of our team to quickly became productive. On the
other hand a good old PHP based solution would be better from several
perspectives. A framework implementing the ideas of Transitional web apps could
be very helpful for a project like this. From improving general know-how,
delivering better performance and SEO, to simplifying deployment. The future is
bright I guess...
