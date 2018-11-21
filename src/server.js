const renderSite = async (req, files) => {
  return `<html>
      <head>
        <meta name='viewport'content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <style>${files.css.contents}</style>
        <title>NICKLAPIEN.com</title>
        <script src="./public/content.js"></script>
      </head>
      <body>
        <div id="app" />
        <script src=".${files.js.path}"></script>
      </body>
    </html>`
}

export default renderSite
