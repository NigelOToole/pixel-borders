// Task type: Images: File copying, no processing, Icons: Processing nunjucks and data.json into HTML
// Src: /src
// Dest: Images: /dist, Icons: /tmp


const { lastRun } = require('gulp');

module.exports = function({ src, dest }, $, paths, isProd, server) {

  function images() {
    return src([`${paths.src}/images/**/*`], { since: lastRun(images) })
      .pipe(dest(`${paths.dest}/images`));
  };

  return {
    images
  };
};
