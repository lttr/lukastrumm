---
title: Structuring application with NX
date: 2020-05-31
tags:
  - angular
  - domain-driven-design
  - nx
---

I came across several approaches to structuring a monorepo style projects. In this post I'm going to document several possibilities while using NX. Examples will be generated using NX cli and Angular cli.

---

```
ng new angular-workspace --createApplication="false"
ng generate application my-app
```

## Categories for libraries

- feature
- data-access
- ui
- util
- shell
- api
- domain
- assets

```mermaid
graph TD;
  APP --> domain1-shell
  subgraph domain1
  domain1-shell --> domain1-featureA
  domain1-shell --> domain1-featureB
  domain1-featureA --> domain1-data-access
  domain1-featureB --> domain1-data-access
  domain1-api --> domain1-data-access
  end

  APP --> domain2-shell
  subgraph domain2
  domain2-shell --> domain2-featureA
  domain2-shell --> domain2-featureB
  domain2-featureA --> domain1-api
  domain2-featureA --> domain2-domain
  domain2-featureB --> domain2-domain
  domain2-domain --> application
  domain2-domain --> entities
  domain2-domain --> infrastructure
  end

  subgraph shared
  domain1-data-access --> shared-utils
  domain1-featureB --> shared-utils
  domain2-featureA --> shared-utils
  end
```

## Sources

- [Ebook from NX authors](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book)
- [Article by Manfred Steyer](https://www.angulararchitects.io/aktuelles/sustainable-angular-architectures-2/)
- [Presentation by Manfred Steyer](https://www.youtube.com/watch?v=94HFD391zkE)
