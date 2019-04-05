// Task type: Processing sass
// Src: /src
// Dest: /tmp

const autoprefixer = require('autoprefixer');

module.exports = function({ src, dest }, $, paths, isProd, server) {

  function styles() {
    return src(`${paths.src}/styles/*.scss`)
      .pipe($.plumber())
      .pipe($.if(!isProd, $.sourcemaps.init()))
      .pipe($.sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['.']
      })
      .on('error', $.sass.logError))
      .pipe($.postcss([
        autoprefixer()
      ]))
      .pipe($.if(!isProd, $.sourcemaps.write()))
      .pipe(dest(`${paths.tmp}/styles`))
      .pipe(server.reload({stream: true}));
  };

  return {
    styles
  };
};
