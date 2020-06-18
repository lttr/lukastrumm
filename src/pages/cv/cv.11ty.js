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
          <a href="https://github.com/lttr">Github</a>
          <a href="https://lukastrumm.com">Personal site</a>
          <a href="mailto:lukas.trumm@gmail.com">lukas.trumm@gmail.com</a>
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
          <li>JavaScript and TypeScript are my main languages.</li>
          <li>I am organized. I love to bring order into complex systems.</li>
          <li>
            I am leader of a local Scout group. I know how to lead and mentor.
          </li>
          <li>
            I am working on beiing fluent in English. My native language is
            Czech.
          </li>
        </ul>

        <h2>Work experience</h2>

        <p><strong>2017 &ndash; 2020 Domat Control System</strong></p>
        <ul>
          <li>
            Lead frontend developer of B2B application (Angular, TypeScript,
            RxJS, C#)
          </li>
          <li>
            I have build CI/CD pipelines (Azure DevOps) and other internal
            automation
          </li>
          <li>
            I have worked hard to keep documentation and written know-how up to
            date
          </li>
        </ul>

        <p><strong>2014 &ndash; 2017 Unicorn Systems</strong></p>
        <ul>
          <li>Member of site reliability engineering team</li>
          <li>I have learned Linux administration</li>
          <li>One year of Java backend development</li>
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
