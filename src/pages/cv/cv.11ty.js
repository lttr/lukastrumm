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
        ${inline('src/pages/cv/cv.css')}
      `}
    </style> `
    return html`
      ${styles}
      <article>
        <h1>Lukas Trumm</h1>

        <p class="links">
          <span>email: lukas.trumm@gmail.com</span>
          <span>location: Czech Republic</span>
        </p>
        <p class="links">
          <a href="https://github.com/lttr">GitHub</a>
          <a href="https://lukastrumm.com">Personal site</a>
        </p>

        <p>
          <em
            >I love web technologies. I am good at keeping things organized.
            Whether it is architecture or user experience I am keen to work on
            the success of a project.</em
          >
        </p>

        <h2>Skills</h2>

        <ul>
          <li>I am fluent in JavaScript and TypeScript</li>
          <li>
            I have used a broad range or technologies and I look forward to
            learning more
          </li>
          <li>I can bring an order into a complex system</li>
          <li>
            I am leader of a local Scout group&mdash;I know how to lead and
            mentor
          </li>
        </ul>

        <h2>Work experience</h2>

        <p><strong>2017 &ndash; 2020 Domat Control System</strong></p>
        <ul>
          <li>
            Lead frontend engineer of a B2B application (Angular, TypeScript,
            RxJS, C#)
          </li>
          <li>
            I have built CI/CD pipelines (Azure DevOps) and other internal
            automation
          </li>
          <li>
            I have worked hard to keep documentation and written know-how up to
            date
          </li>
        </ul>

        <p><strong>2014 &ndash; 2017 Unicorn Systems</strong></p>
        <ul>
          <li>
            I have learned how to keep a big system running as a member of site
            reliability engineering team
          </li>
          <li>I have learned Linux administration</li>
          <li>I was an enterprise Java backend developer</li>
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
      </article>
    `
  },
}
