import * as gulp from 'gulp'
import * as changedInPlace from 'gulp-changed-in-place'
import * as plumber from 'gulp-plumber'
import * as sourcemaps from 'gulp-sourcemaps'
import * as notify from 'gulp-notify'
import * as rename from 'gulp-rename'
import * as ts from 'gulp-typescript'
import * as project from '../aurelia.json'
import { CLIOptions, build } from 'aurelia-cli'
import * as eventStream from 'event-stream'

function configureEnvironment() {
  let env = CLIOptions.getEnvironment()

  return gulp
    .src(`aurelia_project/environments/${env}.ts`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(rename('environment.ts'))
    .pipe(gulp.dest(project.paths.root))
}

var typescriptCompiler = typescriptCompiler || null

function buildTypeScript() {
  typescriptCompiler = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
  })

  let dts = gulp.src(project.transpiler.dtsSource)

  let src = gulp
    .src(project.transpiler.source)
    .pipe(changedInPlace({ firstPass: true }))

  return eventStream
    .merge(dts, src)
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sourcemaps.init())
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write({ sourceRoot: 'src' }))
    .pipe(build.bundle())
}

export default gulp.series(configureEnvironment, buildTypeScript)

// build plugin js files
export function transpilePlugin() {
  const typescriptCompiler = ts.createProject('tsconfig.json', {
    typescript: require('typescript'),
    allowJs: false,
    declaration: true, // write d.ts files
    module: 'commonjs' // note we use commonjs format
  })

  let dts = gulp.src(project.transpiler.dtsSource)
  let src = gulp.src(project.plugin.source.js)

  return (
    eventStream
      .merge(dts, src)
      .pipe(
        plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
      )
      // .pipe(sourcemaps.init())
      .pipe(typescriptCompiler())
      // .pipe(sourcemaps.write({ sourceRoot: 'src' }))
      .pipe(gulp.dest(project.plugin.output))
  )
}
