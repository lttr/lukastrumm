---
title: 77+ questions about a web project
date: 2023-02-08
tags:
  - project
  - engineering
---

You were asked to build a website? Does it seem it will be a larger one? It
might be the case it will actually not be a website but a webapp. It might need
a team to actually do it. Well, better prepare answers for these couple of
questions :-)

---

[[toc]]

## Vision and requirements

- Is there a short document **explaining why** this piece of software should
  exist and a concise description how it would accomplish that?
- Do we have a place for **collecting and prioritizing** requirements?
- Are **non-functional requirements** written somewhere?
- Do we have a **schedule** or milestones which describes at least roughly what
  will be done when?

## Communication

- Can you think of any **expectations** that are not described by current
  requirements?
- Will the **customer collaborate** with us on a regular basis?
  [^customer-collaboration]

## Technical environment

- Does anyone from the team have a specific **know-how** which is necessary /
  effective to leverage for successful completion of the project?
- Will there be a reasonable return of investment from **learning** and
  implementing new technologies? Would it be easier to hire new people with such
  skills?
- Are there **existing systems** like CMSes or APIs that needs to be integrated?
- Are there existing URL addresses or domains that needs to be **redirected** to
  new ones once the new website will be released?

## Infrastructure

- Is there a possibility that currently running systems will be negatively
  impacted after deploying this new application on target domain?
- How will we **host** our website or application? Is it possible to change it
  now or in the future?
- What are the pros and cons of chosen hosting environment over some more
  traditional choice?

## Users

- Do we have some existing **analytics data**?
- **How many users** do we expect first day, first month, first year?
- Which **browsers** and their versions are going to be supported?
- Would the project suffer from missing **accessibility** features? Is it a
  subject of regulation?
- Is it any good to provide users with a **chatbot** and is it worth the effort
  and possible performance issues?
- Are there any use cases for our website/application to be used **without
  JavaScript** enabled?

## Code

- What is/will not be in a **version control** system? (like secrets, documents,
  etc.)
- Is there a **`README.md`** file which has enough information for any developer
  to run the application, test it or prepare it for production?
- Does every developer have an automatic way of **formatting** new code? (in
  editor on save, precommit hook)
- Is there a process in CI that checks common code **style issues** for every
  change? (i.e. linting)
- Is there a process in place that ensures that all code is **checked for
  quality**? (code reviews, automated tests and checks)
- Does every developer know when and how a code review is needed and when it is
  appropriate to merge? [^ship-show-ask]
- Are there some automated **checks for security**? [^security-checks]
- Is there a **CI/CD** pipeline that deploys every change? (continuous
  deployment)
- Is there a **preview environment** for every change and is it practical to
  have them?
- Do we have know-how when and how to use unit **testing**, integration testing
  or end-to-end testing?
- Do we use the right programming **language** for the job?
- Which **framework** do we use, what it solves and what problems it does not
  solve?
- Is there a way to **generate** some boring boilerplate code?
- Do we have a set of **testing data**?
- Can we develop against this data set without even running the database?

## Runtime

- Does the web app handle **redeployments** of static assets seamlessly?
- How will the web app handle a breaking **change in backend APIs** while an old
  version of frontend code is still running on the client side?
- How is the cache on the **CDN** level invalidated?
- Do we send correct **security headers**?
- Do we send correct **cache** headers for HTML, data requests and assets?

## SEO

- Does every page have its **canonical URL**? [^canonical-urls]
- Does our canonical URLs end with or without a slash? Do all redirects, sitemap
  items and links target this canonical URL?
- Do our domain default to **www** prefix?
- Do we need more control over Google results, and will we use Google search
  console? Will we use structured data?
- Which website **analytics** solution will be used? Will we try to project for
  missing data (blocked by users or usage before consent) and how?
- Do we have a complete **sitemap**?
- Do we have a **robots.txt**? Does it contain only necessary records?
- Do we have a page on the site for every frequent **search term**?
- How are we managing **third party scripts**? Do we need Google Tag Manager?
  How much will be the performance influenced by third party scripts?
- Does the application respond with correct **response codes**? An unknown URL
  should be 404 etc.

## Performance, UX, a11y

- Is it OK to display **loading spinners** for 10 seconds on a 3G network before
  displaying the content?
- Will we have to do **image preprocessing**? Will it be a hosted solution? Do
  we care about resolutions and formats of those shipped images?
- Is it useful to measure **Core web vitals** regularly/automatically?
- Will we use **progressive enhancement** techniques? Does our team have
  knowledge to do so?
- Are we going to optimize the amount of **generated CSS**? How?
- Can be the desired set of fonts optimized in order to prevent _Flash of
  unstyled fonts_ for most users?
- Which level of **accessibility** will be our target? Do we have someone who
  understands accessibility on this level?
- Do we have a plan for hallway **usability testing**?
  [^hallway-usability-testing]

## Design

- How does our **design process** look like? How are responsibilities
  distributed among designers, developers, marketers, product or UX people?
- Do we need our own **design system**?
- Which **tools and techniques** we will use (preprocessing, postprocessing,
  feature detection, polyfills, CSS structure and layering, scoping, reset, RTL
  support...)?
- How will we approach responsive design? **Mobile or desktop first**, strict
  set of media queries or more fluid techniques, leverage container queries?
- Which **set of icons** we will use? Will it play well with our framework of
  choice?
- Do we have a live web with our **style guide**?

## Legal

- Is it necessary to have a **cookie consent** on the website?
- In case we need a cookie consent would it be beneficial to use a third party
  solution? Will we use the analytics from that solution for something?
- Do we need to implement something extra in order to comply with **privacy
  laws** like GDPR?

## Maintenance

- Where will we **track tasks and bugs**?
- How can our **customers report** bugs?
- Do we have an automated system for **reporting runtime errors**?
- How are our production systems **backuped**? When was the last time we have
  done a restoration from those backups?
- How often there is a change in some data or source code? For how long will our
  system handle the increasing frequency of change?
- Which types of changes would our **architecture** allow easily and which would
  be hard?
- Do we have a place for writing down **maintenance procedures**? (E.g. updating
  dependencies, data schema migration, adding redirects, etc.)
- Who manages credentials and how? Do we need to use an external service for
  them? Do we need to rotate them?
- Is there a single place (like a URL) which anybody from the team can visit and
  see important links or other useful information about the project? (I call
  this a **project signpost**)
- Do we need to track special events in the system, like **conversions**?
- Do we have a way to automatically check for links that accidentally targets
  **PAGE NOT FOUND**?
- Does our **monitoring, logging** and tracking solution solve real problems?

## Marketing and sales

- How does marketing or sales strategy correspond to a **release date** of our
  product?
- Do we focus enough on **feedback** from users, developers, investors?

## The bottom line

This is not an exhaustive list, although I was trying to be complete---based on
my experience. BUT keep in mind that it is also critical to **maximize the
amount of work that does not need to be done!** [^work-not-done]

[^customer-collaboration]:
    From [Agile manifesto](https://agilemanifesto.org/):
    Customer collaboration over contract negotiation

[^ship-show-ask]:
    One nice strategy for this is called [Ship / Show /
    Ask](https://martinfowler.com/articles/ship-show-ask.html)

[^security-checks]:
    For example GitHub has tools for automated checks of
    [dependencies](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)
    and [static code analysis](https://github.com/github/codeql-action)

[^hallway-usability-testing]:
    Hallway usability testing is mentioned for example
    in the famous [Joel's
    test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)

[^work-not-done]:
    Again a quote from [Agile
    manifesto](https://agilemanifesto.org/)

[^canonical-urls]:
    There are quite a few rules for canonical URLs so it is best
    to consult [Google search
    documentation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
