const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const jsonMinify = require("gulp-json-minify");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const browserSync = require("browser-sync").create();

// Minify JSON
function json() {
  return gulp
    .src(["./*.json", "!./*.min.json", "!./package*.json"])
    .pipe(jsonMinify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
}

// Minify CSS
function css() {
  return gulp
    .src(["./*.css", "!./*.min.css"])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
}

// Minify JavaScript
function js() {
  return gulp
    .src(["./*.js", "!./*.min.js", "!./gulpfile.js"])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream());
}

// Browser Sync
function dev() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp
    .watch(["./*.json", "!./*.min.json", "!./package*.json"])
    .on("change", json);
  gulp.watch(["./*.css", "!./*.min.css"]).on("change", css);
  gulp.watch(["./*.js", "!./*.min.js", "!./gulpfile.js"]).on("change", js);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.json = json;
exports.css = css;
exports.js = js;
exports.default = gulp.parallel(json, css, js);
exports.dev = dev;
