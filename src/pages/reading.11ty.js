const html = require('../_lib/html')

module.exports = {
  data: {
    title: 'Reading',
    permalink: '/reading/',
  },

  render() {
    return html`
      ${goodreadsStyling()}
      <h1>Reading</h1>
      <a
        rel="nofollow"
        href="https://www.goodreads.com/user/show/64207622-luk-trumm"
        >Lukas Trumm's favorite books at Goodreads »</a
      >
      <section>
        <h3>Currently reading</h3>
        ${currentlyReadingSnippet()}
      </section>

      <section>
        <h3>Read</h3>
        ${readSnippet()}
      </section>
    `
  },
}

function goodreadsStyling() {
  return html`
    <style type="text/css" media="screen">
      .gr_grid_container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 1rem;
        align-items: baseline;
      }

      .gr_grid_book_container {
        width: 98px;
        padding: 0px 0px;
        overflow: hidden;
      }
    </style>
  `
}

function currentlyReadingSnippet() {
  return html`
    <div id="gr_grid_widget_1563908353">
      <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <div class="gr_grid_container">
        <div class="gr_grid_book_container">
          <a
            title="Škorpilova škola běhu"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/24686896-korpilova-kola-b-hu"
            ><img
              alt="Škorpilova škola běhu"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422216504l/24686896._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Enterprise Angular Monorepo Patterns"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/43599496-enterprise-angular-monorepo-patterns"
            ><img
              alt="Enterprise Angular Monorepo Patterns"
              border="0"
              src="https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="The Road to learn React"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/37503118-the-road-to-learn-react"
            ><img
              alt="The Road to learn React"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513179373l/37503118._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Practical Test-Driven Development using C# 7: Unleash the power of TDD by implementing real world examples under .NET environment and JavaScript"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/38651860-practical-test-driven-development-using-c-7"
            ><img
              alt="Practical Test-Driven Development using C# 7: Unleash the power of TDD by implementing real world examples under .NET environment and JavaScript"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519145792l/38651860._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Ekonomie dobra a zla"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/6557582-ekonomie-dobra-a-zla"
            ><img
              alt="Ekonomie dobra a zla"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1245410805l/6557582._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="High Performance Browser Networking"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/17985198-high-performance-browser-networking"
            ><img
              alt="High Performance Browser Networking"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369754654l/17985198._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Practical Vim: Edit Text at the Speed of Thought"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/13607232-practical-vim"
            ><img
              alt="Practical Vim: Edit Text at the Speed of Thought"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1336278962l/13607232._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Návrhové vzory : [33 vzorových postupů pro objektové programování]"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/8697958-n-vrhov-vzory"
            ><img
              alt="Návrhové vzory : [33 vzorových postupů pro objektové programování]"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1280771376l/8697958._SX98_.jpg"
          /></a>
        </div>
        <noscript
          ><br />Share <a rel="nofollow" href="/">book reviews</a> and ratings
          with Lukáš.</noscript
        >
      </div>
    </div>
    <script
      src="https://www.goodreads.com/review/grid_widget/64207622.Lukas's%20currently-reading%20book?cover_size=medium&hide_link=true&hide_title=true&num_books=10&order=d&shelf=currently-reading&sort=date_added&widget_id=1563908353"
      type="text/javascript"
      charset="utf-8"
    ></script>
  `
}

function readSnippet() {
  return html`
    <div id="gr_grid_widget_1563908384">
      <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <div class="gr_grid_container">
        <div class="gr_grid_book_container">
          <a
            title="The Ultimate Guide to Remote Work: How to Grow, Manage and Work with Remote Teams (Zapier App Guides Book 3)"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/25266259-the-ultimate-guide-to-remote-work"
            ><img
              alt="The Ultimate Guide to Remote Work: How to Grow, Manage and Work with Remote Teams"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427940892l/25266259._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Vzhůru do (responzivního) webdesignu"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/36175447-vzh-ru-do-responzivn-ho-webdesignu"
            ><img
              alt="Vzhůru do (responzivního) webdesignu"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504462656l/36175447._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Peníze, nebo život?"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/17261095-pen-ze-nebo-ivot"
            ><img
              alt="Peníze, nebo život?"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358632658l/17261095._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Mastering Async/Await"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/41961722-mastering-async-await"
            ><img
              alt="Mastering Async/Await"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537566975l/41961722._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="SMACSS"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/18874747-smacss"
            ><img
              alt="SMACSS"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465816681l/18874747._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Jak se stát forexovým obchodníkem"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/33311614-jak-se-st-t-forexov-m-obchodn-kem"
            ><img
              alt="Jak se stát forexovým obchodníkem"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481491864l/33311614._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Ekonomie"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/15720544-ekonomie"
            ><img
              alt="Ekonomie"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340561362l/15720544._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Rich Dad, Poor Dad"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad"
            ><img
              alt="Rich Dad, Poor Dad"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388211242l/69571._SY160_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="The Richest Man in Babylon"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/1052.The_Richest_Man_in_Babylon"
            ><img
              alt="The Richest Man in Babylon"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348336780l/1052._SY160_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="The New CSS Layout"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/36387025-the-new-css-layout"
            ><img
              alt="The New CSS Layout"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507717562l/36387025._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Building APIs with Node.js"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/33541708-building-apis-with-node-js"
            ><img
              alt="Building APIs with Node.js"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482358419l/33541708._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Dive Into HTML5"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/16147818-dive-into-html5"
            ><img
              alt="Dive Into HTML5"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356709695l/16147818._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Essential TypeScript"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/30251735-essential-typescript"
            ><img
              alt="Essential TypeScript"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463933010l/30251735._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Nenuťte uživatele přemýšlet"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/10165120-nenu-te-u-ivatele-p-em-let"
            ><img
              alt="Nenuťte uživatele přemýšlet"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1294581569l/10165120._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Pro CSS Techniques"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/314094.Pro_CSS_Techniques"
            ><img
              alt="Pro CSS Techniques"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348667601l/314094._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="The Everything Store: Jeff Bezos and the Age of Amazon"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/17660462-the-everything-store"
            ><img
              alt="The Everything Store: Jeff Bezos and the Age of Amazon"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1365394361l/17660462._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="UML 2 a unifikovaný proces vývoje aplikací Objektově orientovaná analýza a návrh prakticky"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/13452519-uml-2-a-unifikovan-proces-v-voje-aplikac-objektov-orientovan-anal-za"
            ><img
              alt="UML 2 a unifikovaný proces vývoje aplikací Objektově orientovaná analýza a návrh prakticky"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328378379l/13452519._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Bpmn Modeling and Reference Guide: Understanding and Using Bpmn"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/3958742-bpmn-modeling-and-reference-guide"
            ><img
              alt="Bpmn Modeling and Reference Guide: Understanding and Using Bpmn"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395658844l/3958742._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="OCA: Oracle Certified Associate Java SE 8 Programmer I Study Guide: Exam 1Z0-808"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/23059696-oca"
            ><img
              alt="OCA: Oracle Certified Associate Java SE 8 Programmer I Study Guide: Exam 1Z0-808"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417983308l/23059696._SX98_.jpg"
          /></a>
        </div>
        <div class="gr_grid_book_container">
          <a
            title="Getting Things Done: The Art of Stress-Free Productivity"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/1633.Getting_Things_Done"
            ><img
              alt="Getting Things Done: The Art of Stress-Free Productivity"
              border="0"
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312474060l/1633._SX98_.jpg"
          /></a>
        </div>
        <noscript
          ><br />Share <a rel="nofollow" href="/">book reviews</a> and ratings
          with Lukáš</noscript
        >
      </div>
    </div>
    <script
      src="https://www.goodreads.com/review/grid_widget/64207622.Luk%C3%A1%C5%A1's%20read%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=d&shelf=read&sort=date_added&widget_id=1563908384"
      type="text/javascript"
      charset="utf-8"
    ></script>
  `
}
