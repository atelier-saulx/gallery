
var $5hkg4o = {};
var $23vqyb = {};// ================== /Users/jimdebeer/Desktop/saulx/photoGallery/node_modules/aristotle/lib/file/static/regenerator/index.js $5hkg4o ===================

// ================== /Users/jimdebeer/Desktop/saulx/photoGallery/node_modules/aristotle/lib/file/static/promise/index.js $23vqyb ===================

// ================== /Users/jimdebeer/Desktop/saulx/photoGallery/src/server.js $gockce ===================
const _$gockce_renderSite = async (req, files) => {
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
    </html>`;
};

var $gockce = _$gockce_renderSite;
module.exports = $gockce