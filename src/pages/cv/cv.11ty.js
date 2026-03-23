const path = require("path")
const { html, css } = require("../../_lib/html")
const inline = require("../../_lib/inline")

module.exports = {
  data: {
    layout: "layouts/plain",
    permalink: "/cv/",
  },

  render() {
    const styles = html`<style>
      ${css`
        ${inline(path.join(__dirname, "cv.css"))}`}
    </style> `
    return html`
      ${styles}

      <h1>Lukas Trumm</h1>

      <p class="links">
        <span>email: lukas.trumm on gmail</span>
        <span>location: Czech Republic</span>
      </p>
      <p class="links">
        <a href="https://github.com/lttr">GitHub</a>
        <a href="https://lukastrumm.com">Personal site</a>
      </p>

      <p>
        <em
          >I love web technologies. I am good at keeping things organized. My
          measure of success if whether the customer is enjoying the work, not
          only me.
        </em>
      </p>

      <h2>Skills</h2>

      <ul>
        <li>
          Leading and mentoring &ndash; both in tech teams and as a local Scout
          group leader
        </li>
        <li>Frontend architecture and web performance optimization</li>
        <li>Platform engineering and developer experience</li>
        <li>AI-assisted engineering workflows</li>
        <li>JavaScript, TypeScript, Vue, Nuxt, modern CSS</li>
      </ul>

      <h2>Work experience</h2>

      <h3>2026+ Platform Engineer</h3>
      <ul>
        <li>
          I work as a member of the Platform team at Dr.&nbsp;Max Pharmacy
          Chain, enabling other developers and the business to move faster
        </li>
        <li>
          We are migrating a large Nuxt&nbsp;2 / Vue&nbsp;2 platform to the
          latest versions
        </li>
      </ul>

      <h3>2023+ Architect, Senior Software Engineer</h3>
      <ul>
        <li>
          I have led frontend architecture on several projects at Quanti,
          focused on Nuxt, Vue and modern CSS
        </li>
        <li>Drove web performance optimizations on e-commerce sites</li>
        <li>
          Gave talks on web frameworks, performance and AI-assisted engineering;
          contributed to the company's AI adoption movement
        </li>
      </ul>

      <h3>2020 &ndash; 2023 Technical leader</h3>
      <ul>
        <li>I have led a team at Hanaboso</li>
        <li>
          I have worked on several public facing web applications and large
          sites in cross-functional teams
        </li>
        <li>
          I have developed a design system with suport for RTL languages and
          used technologies like VueJS, Nuxt, GraphQL, Sass, Bootstrap,
          Storybook, atomic design and a headless CMS
        </li>
      </ul>

      <h3>2017 &ndash; 2020 Frontend engineer</h3>
      <ul>
        <li>
          I have built a B2B application (Angular, NX, TypeScript, RxJS, Redux,
          Jest, Cypress, C#) at Domat Control Systems
        </li>
        <li>
          I have built CI/CD pipelines (Azure DevOps) and other internal
          automation (Powershell, Node)
        </li>
        <li>
          I have worked hard to keep documentation and written know-how up to
          date
        </li>
      </ul>

      <h3>2014 &ndash; 2017 Java developer</h3>
      <ul>
        <li>I was an enterprise Java backend developer at Unicorn Systems</li>
        <li>
          I have learned how to keep a big system running as a member of site
          reliability engineering team
        </li>
        <li>I have learned Linux administration</li>
      </ul>

      <h2>Education</h2>

      <p>
        Bachelor degree in informatics (2014). Bachelor degree in financial
        management (2013).
      </p>

      <h2>Life achievements</h2>

      <ul>
        <li>I have finished multiple mountain running races</li>
        <li>I have two small kids</li>
        <li>With my wife we built a house</li>
      </ul>
    `
  },
}
