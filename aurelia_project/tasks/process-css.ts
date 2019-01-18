import * as gulp from 'gulp'
import * as sourcemaps from 'gulp-sourcemaps'
import * as changedInPlace from 'gulp-changed-in-place'
import * as sass from 'gulp-sass'
import * as project from '../aurelia.json'
import { build } from 'aurelia-cli'

export default function processCSS() {
  return gulp
    .src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(
      sass({ includePaths: ['node_modules/open-iconic/font/css'] }).on(
        'error',
        sass.logError
      )
    )
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(build.bundle())
}

// build plugin css files
// you need bit more than this if you use scss
export function pluginCSS() {
  return gulp
    .src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output))
}
