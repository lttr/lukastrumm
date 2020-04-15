module.exports = function plain({ content }) {
  return `

<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" href="/css/fonts.css" />
<link rel="stylesheet" href="/css/styles.css" />
<link rel="stylesheet" href="/css/code.css" />
</head>
<body>

<div class="page-wrapper">
<main>
<article>

${content}

</article>
</main>
</div>

</body>
</html>

`
}
