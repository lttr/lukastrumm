---
title: Making sense of Web features
date: 2024-09-12
tags:
  - web
---

There is a huge amount of features on the web. The Browser Compatibility Data project lists more than 14000 of them! How to make sense of it all?

---

This is a question that has been unanswered for a long time. Yes, every web developer uses [caiuse.com](https://caniuse.com). Or they google or maybe ask chatgpt. The problem is that these tools have answers to specific questions, but lack a bigger picture or links to the source of truth.

## The WebDX Group

Not anymore! The WebDX group is now doing an incredible job of organizing, categorizing, and naming things (&#8592; this is the hard part, as you know) around the web platform. They are trying to improve the overall developer experience with the web and browsers in a coordinated way.

WebDX is a community group that is part of the W3C. You can see what they are cooking in their [repositories](https://github.com/web-platform-dx). The most interesting output for me is the [web-features repo](https://github.com/web-platform-dx/web-features). What they have done is to categorize a huge amount of specific features into a more understandable set of higher level features.

For example, one of the newly available features is _Set methods_. Any new method for manipulating a set could be a single feature. However, it becomes much more useful if it is communicated and documented as a single high-level feature.

## The documentation

The other part is how to find detailed information about _a feature_. Well, this is where the [Open Web Docs](https://openwebdocs.org/) initiative came in. While MDN has always been a great reference, there has been a lack of hands-on content. The Open Web Docs group is trying to change that. They are cranking out a ton of new tutorials, guides, and explainers for MDN web documentation, as well as updates to the underlying data --- [BCD (Browser Compat Data)](https://github.com/mdn/browser-compat-data).

One example is a page on MDN about [Relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors). It is cleanly mapped to a high-level web feature. It provides much better understanding and context around that feature than the individual reference pages for each color feature.

## The surveys

What is really nice about the above effort is that they really want to collaborate. They take input from surveys like [The State of HTML](https://stateofhtml.com/) and [The State of CSS](https://stateofcss.com), and later they can use the same set of names for web features to track survey results about them.

And by the way, while you are filling out these surveys, you can click the "Add to Reading List" button. It will present you with links to MDN where you can learn more about exactly the things you didn't know.

## The Reality

Great, but is the Web getting better? Hell, yes it is!

The initiative to close the gap between desired features and actual availability across browsers is evident. Namely, the [Interop](https://wpt.fyi/interop-2024) project ensures that a set of features is implemented as fully as possible in all major browsers. There is a new iteration of this project every year.

How much and how well these features are implemented is measured using Web Platform Tests. The same set of tests is run against all browsers. That is why we have these nice percentages that reflect the actual state of the features in the browsers.

## The Baseline

The moment when a feature is implemented in all major browsers is a very important moment. And since we have nicely grouped the features as described above - the only thing missing is a name for the moment. And there we have it: A feature is Baseline Newly available when it is supported by all major browsers. And a feature is Widely available when two and a half years have passed since it was Newly available.

You can read more about the [Baseline idea on web.dev](https://web.dev/baseline/) since it was initiated by Google.

## The visual dashboards

Everything starts to make more sense when you can see it in a more visual way. Well-designed tables, graphs, handy links to resources right there...

This is baked into a few attempts to create useful dashboards. Check them all out, each one is a different take on the subject:

- [Simple dashboard from the folks behind the WebDX group](https://web-platform-dx.github.io/web-features-explorer/)
- [Nice graphs of passing web platform tests feature by feature by Google Chrome team](https://webstatus.dev/)
- and [my attempt to create a more interactive version](https://web-features.lttr.cz/)

You can use them from time to time to catch up on what is new in general or what is new in the Wide adoption status. It is also a good reference when you are starting a new project and deciding what set of features is actually available and supported enough.

![Web Features Explorer display the information in a clean way](web-features-explorer.webp)

![Webstatus.dev shows real progress on features in terms of passed web platform tests in graphs](webstatus.webp)

![My Web Platform Features dashboard allows filtering and sorting features](web-platform-features.webp)

## The future

Some features have recently been implemented in all browsers rather quickly. But some may not even be considered a good idea by some browser makers. You can find detailed information about what may or may not be coming at the following sites:

- [Mozilla standards positions](https://mozilla.github.io/standards-positions/)
- [Webkit team standards positions](https://webkit.org/standards-positions/)
- [Google Chrome feature roadmap](https://chromestatus.com/roadmap)

## Conclusion

Watching the web platform evolve is fascinating. The feedback loop is improving. Interoperability is getting better in many areas.

I have wanted to have a useful dashboard with web features for a long time, and suddenly the data is of such nice quality that I managed to build [my own](https://web-features.lttr.cz/) in a couple of evenings.
