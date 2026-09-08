#!/usr/bin/env node
// Import a published tip from the notes folder into src/tips/.
//
// Usage: node tools/import-tip.js <path-to-published-tip.md> [--draft]
//
// Reads frontmatter (title, slug, date), takes the number from the
// "Tip no. N" line of the "## English" section and writes
// src/tips/<slug>.md containing only the English text.

const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const [, , input, ...flags] = process.argv
if (!input) {
  console.error("Usage: node tools/import-tip.js <published-tip.md> [--draft]")
  process.exit(1)
}

const { data, content } = matter(fs.readFileSync(input, "utf8"))
const englishMatch = content.match(
  /^## English\s*\n([\s\S]*?)(?=^## |\s*$(?![\s\S]))/m,
)
if (!englishMatch) {
  console.error("No '## English' section found.")
  process.exit(1)
}

const lines = englishMatch[1].trim().split("\n")
const headingMatch = lines[0].match(/^Tip no\. (\d+)/)
if (!headingMatch) {
  console.error("English section does not start with 'Tip no. N, Title'.")
  process.exit(1)
}
const number = Number(headingMatch[1])
const body = lines.slice(1).join("\n").trim()

const slug =
  data.slug || path.basename(input, ".md").replace(/^\d{4}-\d{2}-\d{2}_/, "")
const date =
  data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date
if (!date) {
  console.error("Missing 'date' in frontmatter.")
  process.exit(1)
}

const frontmatter = [
  "---",
  `title: ${data.title}`,
  `number: ${number}`,
  `date: ${date}`,
  flags.includes("--draft") ? "draft: true" : null,
  "---",
]
  .filter(Boolean)
  .join("\n")

const target = path.join(__dirname, "..", "src", "tips", `${slug}.md`)
fs.writeFileSync(target, `${frontmatter}\n\n${body}\n`)
console.log(
  `Written ${path.relative(process.cwd(), target)} (tip no. ${number})`,
)
