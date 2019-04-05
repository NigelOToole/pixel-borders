// ----- Imports and variables ------
const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const { argv } = require('yargs');
const $ = gulpLoadPlugins();
const server = browserSync.create();

const port = argv.port || 9000;

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;

const paths = {
  src: 'src',
  dest: 'dist',
  tmp: '.tmp',
  gulp: './tasks/gulp'
};


// ----- Import tasks ------
function getTask(task) {
	return require(`${paths.gulp}/${task}.js`)({ src, dest }, $, paths, isProd, server);
}

const { styles } = getTask('styles'); 
exports.styles = styles;

const { images } = getTask('images'); 
exports.images = images;


// ----- Build tasks ------
function compress() {
  return src([`${paths.src}/*.html`, `${paths.tmp}/*/**/*.{html,css,js}`])
    // .pipe($.useref({searchPath: [`${paths.tmp}`, `${paths.src}`, '.']}))
    // .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
    // .pipe($.if(/\.css$/, $.postcss([cssnano({safe: true, autoprefixer: false})])))
    // .pipe($.if(/\.html$/, $.htmlmin({
    //   collapseWhitespace: true,
    //   minifyCSS: true,
    //   minifyJS: {compress: {drop_console: true}},
    //   processConditionalComments: true,
    //   removeComments: true,
    //   removeEmptyAttributes: true,
    //   removeScriptTypeAttributes: true,
    //   removeStyleLinkTypeAttributes: true
    // })))
    .pipe(dest(`${paths.dest}`));
}

function clean() {
  return del([`${paths.tmp}`, `${paths.dest}`])
}
exports.clean = clean;

function measureSize() {
  return src(`${paths.dest}/**/*`)
    .pipe($.size({title: 'build', gzip: true}));
}

const build = series(
  clean,
  parallel(
    series(parallel(styles), compress),
    images
  ),
  measureSize
);


// ----- Serve tasks ------
function startAppServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: [`${paths.tmp}`, `${paths.src}`],
      routes: {
        '/node_modules': 'node_modules'
      },
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  });

  watch([
    `${paths.src}/*.html`,
    `${paths.src}/images/**/*`
  ]).on('change', server.reload);

  watch(`${paths.src}/**/*.scss`, styles);
}


let serve;
if (isDev) {
  serve = series(clean, parallel(styles), startAppServer);
} else if (isProd) {
  serve = series(build, startDistServer);
}

exports.serve = serve;

exports.build = build;
exports.dist = build;
exports.default = build;
