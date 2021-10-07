const path = require('path')
const { html, css } = require('../../_lib/html')
const inline = require('../../_lib/inline')

module.exports = {
  data: {
    layout: 'layouts/plain',
    permalink: '/cv/',
  },

  render() {
    const styles = html`<style>
      ${css`
        ${inline(path.join(__dirname, 'cv.css'))}`}
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
          >I love web technologies. I am good at keeping things organized.
          Whether it is architecture or user experience I am keen to work on the
          success of a project.</em
        >
      </p>

      <h2>Skills</h2>

      <ul>
        <li>JavaScript and TypeScript are languages of my choice</li>
        <li>
          I have used a broad range or technologies and I look forward to
          learning more
        </li>
        <li>I can bring an order into a complex system</li>
        <li>
          As a leader of a local Scout group I know how to lead and mentor
        </li>
      </ul>

      <h2>Work experience</h2>

      <h3>2020 &ndash; present Hanaboso</h3>
      <ul>
        <li>Team leader / architect</li>
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

      <h3>2017 &ndash; 2020 Domat Control System</h3>
      <ul>
        <li>
          Lead frontend engineer of a B2B application (Angular, NX, TypeScript,
          RxJS, Redux, Jest, Cypress, C#)
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

      <h3>2014 &ndash; 2017 Unicorn Systems</h3>
      <ul>
        <li>Enterprise Java backend developer</li>
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
