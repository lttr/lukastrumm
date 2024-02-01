---
title: Vue Nation 2024 conference
date: 2024-02-01
tags:
  - vue
  - nuxt
  - conference
---

- VueSchool: VueJS Certification - senior level - goes live in Q2 2024
- Evan You: Vue 2 has reached End of Life on December 31st, 2023 (there will be no new releases)
- Evan You: There are experimental macros that might be included in core Vue in the future at https://vue-macros.dev
- Evan You: Suspense component is going to be stable in next couple of minor versions
- Evan You: Do not agree with React's approach of introducing such a big shift as Server components that are in the core of the framework
- Evan You: useId() utility might be implemented in next couple of minor versions, there is demand for it (https://github.com/vuejs/rfcs/discussions/557)
- When to use Pinia, when not? [Pinia docs](https://pinia.vuejs.org/introduction.html#Why-should-I-use-Pinia-), danger of [Cross-Request State Pollution](https://vuejs.org/guide/scaling-up/ssr.html#cross-request-state-pollution) in case of SSR with other "solutions", simple alternative is Nuxt's [useState](https://nuxt.com/docs/api/composables/use-state)
- [OWASP](https://owasp.org/www-project-top-ten/) TOP 10 (2021): No. 1 is Broken Access Control, No. 3 is Injection - both might be directly related to our VueJS application code (sign in/up flow, user provided HTML, CSS and URLs)
- Michael Thiessen has a lot of [articles](https://michaelnthiessen.com/articles) and a couple of courses around design patterns in VueJS
- Filip Rakowski from VueStorefront has an article about caching: [How to deal with caching and dynamic content in Nuxt?](https://dev.to/vue-storefront/how-to-deal-with-caching-and-dynamic-content-2ilk)(put session specific content into ClientOnly, cache the rest on CDN)
- Filip Rakowski: to limit overfetching from browser, delegate API federation (parallel) and orchestration (serial) calls to a dedicated middleware (might be API routes in Nuxt) on the backend
- Justin Schroeder, author of [FormKit](https://formkit.com/), introduced a form tree abstration for elegant handling of a lot of form related challanges
- Luke Diebold: "The author of [Quasar framework](https://quasar.dev/) has been thinking about his framework's APIs for years, thats why they are so great." ...At least for apps built with Material design...
- Zernonia is working hard on porting [Radix to Vue](https://www.radix-vue.com/) and [Shadcn UI to Vue](https://www.shadcn-vue.com/), too.
- John Leider from Vuetify: Important components will be finished in 2024 - treeview, date-picker, etc.
- Maya Shavin: Component tests for Vue are supported by Playwright (and by Cypress, however Nuxt supported is wip)
- PrimeVue is a compelling, fairly complete component library, with strong theming (also unstyled) and customizability, only prebuild templates are paid, core is open source
- Abdelrahman Awad, author of VeeValidate: Generic types on Vue components are easy to use and very useful for input wrappers
- [Common VueJS mistakes and how to avoid them](https://vueschool.io/lessons/unintentionally-mutating-props) is a short free and hands-on course
- [WebAIM report](https://webaim.org/projects/million/): 96% of top 1 million websites has accessibility issues averaging at around 50 per page, number of homepage elements have increased over 34% in last 4 years, ... and a lot more insights
- Daniel Roe: Easy caching for external API route via [Cached event handler](https://nitro.unjs.io/guide/cache#cached-event-handler) from Nitro (this one is not in Nuxt docs, only in Nitro docs), combined with [Server storage](https://nuxt.com/docs/guide/directory-structure/server#server-storage)
