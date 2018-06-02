const fs = require('fs')
const Remarkable = require('remarkable')
const ToC = require('markdown-toc')

const remarkableOpts = {
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: true,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (/* str, lang */) { return '' }
}
const md = new Remarkable('full', remarkableOpts)

// read the input doc
// =
const doc = fs.readFileSync('./index.md', 'utf8')

// render the table of contents
// =
const tocRendered = (new Remarkable('full', remarkableOpts)).use(ToC.plugin()).render(doc)
const tocHTML = md.render(tocRendered.content)

// render the content, using the ToC to set headers
// =
md.renderer.rules.heading_open = function(tokens, idx) {
  const tok = tokens[idx];
  const tokContent = tocRendered.tokens[idx + 1];

  if(tokContent.slug) {
    const heading = '<h' + tok.hLevel + ' id="' + tokContent.slug + '">';
    const anchor = '<a'
      + ' href="#'+ tokContent.slug + '"'
      + ' title="Link to this heading"'
      + ' class="anchor"'
      + ' aria-hidden="true"'
      + '></a>';
    return heading + anchor;
  }
  return '<h' + tok.hLevel + '>';
}
const docHTML = md.renderer.render(tocRendered.tokens, md.options)

// write the final HTML
// =
const out = `<html>
  <head>
    <meta charset="utf-8" />
    <title>Information Civics</title>
    <link rel="stylesheet" href="/styles.css">
    <link rel="me" href="https://twitter.com/pfrazee">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@pfrazee">
    <meta name="twitter:creator" content="@pfrazee">
    <meta name="og:title" content="Information Civics">
    <meta name="og:description" content="An exploration of computer-network architectures as civic structures.">
  </head>
  <body>
    <div id="nav-toggle"></div>

    <nav>
      ${tocHTML}
    </nav>

    <main>
      <div class="header">
        <h1>Information Civics:<br><small>Deconstructing the power structures of large-scale social computing networks</small></h1>
        <p class="author">By Paul Frazee</p>
      </div>
      ${docHTML}
    </main>

    <script src="/index.js"></script>
  </body>
</html>
`
fs.writeFileSync('./index.html', out, 'utf8')