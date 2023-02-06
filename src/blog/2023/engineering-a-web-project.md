---
title: Engineering a web project
date: 2023-01-27
draft: true
tags:
  - project
  - engineering
---

This will be a long list. There is a lot of decisions that have to be made
somehow when starting or maintaining an ambitious software project. I will focus
on a larger web site/application, since that is the type of software I usually
work on.

---

_What does it even mean to have a well engineered website or a web application?_

## Vision and requirements

I believe, there needs to be a short document **explaining why** a piece of software
should exist and how it would ideally look like. Many decisions became
complicated when the basics are not understood.

On the other hand writing down all requirements is not practical. There have to
be a place for collecting and **prioritizing** them though. It is also great to specify at
least some non-functional requirements because they used to be understood as
implicit. Questions like _'Is it OK to display a loading spinner for 10 seconds
on a 3G network before displaying the content?'_ should be asked.

## Communication

It is all about **expectations**. Strive to minimize the amount of expectations that
are not beeing communicated. At the same time the solution is not to have
everything in some sort of contracts as the Agile manifesto says: _Customer
collaboration over contract negotiation_.

## Technical environment

There might be an existing **know-how** or strategies in place that might be
important to take into account. Will there be a reasonable return of investment
from learning and implementing new technologies? Would it be easier to hire new
people with such skills?

There might be **existing systems** like CMSes or APIs that needs to be integrated.

There might be existing URL addresses that needs to be **redirected** to new
ones once the new website will be released.

## Infrastructure

A **domain name** is something significant and the new application needs to be
deployed in such a way that currently running systems under the domain will not
be negatively affected.

- How can we **host** our website or application? Is it possible to change it now or
  in the future?

## Users

- Do we have some existing **analytics data**?
- **How many users** do we expect first day, first month, first year?
- Which **browsers** and their versions are going to be supported?
- Would the project suffer from missing **accessibility** features? Is it a subject of regulation?
- Is it any good to provide users with a **chatbot** and is it worth the effort and
  possible performance issues?
- Are there any use cases for our website/application to be used **without
  JavaScript** enabled?

## Code

- What is not in **version control** system? (secrets, documents)
- Does every developer have an automatic way of **formatting** new code? (in
  editor on save, precommit hook)
- Is there a process in CI that checks common code **style issues** for every
  change? (i.e. linting)
- Is there a process in place that ensures that all code is **checked for quality**?
  (code reviews, automated tests and checks)
- Does every developer know when and how a code review is needed and when it is appropriate to merge? ([ship-show-ask](https://martinfowler.com/articles/ship-show-ask.html))
- Are there some automated checks for security? ([dependencies](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates), [static code
  analysys](https://github.com/github/codeql-action))
- Is there a CI/CD pipeline that deploys every change? (continuous deployment)
- Is there a **preview environment** for every change and is it practical to have
  them?
- Is there a know-how when and how to use unit **testing**, integration testing or
  end-to-end testing?
- Do we use the right programming **language** for the job?
- Which **framework** do we use and what it solves and what problems it does not solve?
- Is there a way to **generate** some boring boilerplate code?
- Do we have a set of testing data?
- Can we develop against this data set without even running the database?

## Runtime

- Does the web app handle redeployments seamlessly?
- How is the cache on the CDN level invalidated?
- Do we send correct security headers?
- Do we send correct cache headers for HTML, data requests and assets?

## SEO and marketing

Canonical addresses, ending slash, starting with www
Google search console
Website analytics
SEO - sitemap
SEO - landing pages for frequent search terms
GTM
Robots txt
Marketing alignment

- Make sure that the project is aligned with marketing strategy and deadlines

## Performance, UX, a11y

Image processing, rules, hosting, formats
Core web vitals
Progressive enhancement
Generated CSS
Font optimization

## Design

Design process
Design system - tokens, principles
CSS tools - scss, utility library, postcss
Media query strategy - mobile/desktop first
Icons system
Styleguide
Fonts and preventing FOUF

## Legal

Cookie consent
GDPR

## Maintenance

Bug tracking
Backup strategy
Frequency of change
Flexibility of architecture
Credential storage
Signpost
Tracking 404 links
Conversions tracking
Setup redirects
