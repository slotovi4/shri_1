const gulp = require("gulp"), //gulp
  sass = require("gulp-sass"), //sass
  concat = require("gulp-concat"), //конкатанация
  cssnano = require("gulp-cssnano"), //сжатие css
  rename = require("gulp-rename"), //ренейм
  babel = require('gulp-babel'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  sourcestream = require('vinyl-source-stream');
ts = require("gulp-typescript"); //TypeScript

const source = "./app/",
  dist = "./dist/",
  path = {
    src: {
      js: source + "js/**/*.js",
      ts: source + "js/**/*.ts",
      components: source + "components/",
      scss: source + "sass/**/*.scss",
      mainscss: source + "sass/main.scss",
      descbemcss: source + "bem/desktop/**/*.css",
      touchbemcss: source + "bem/touch/**/*.css",
      commonbemcss: source + "bem/common/**/*.css",
      desccss: source + "bem/desktop.css",
      touchcss: source + "bem/touch.css",
      bem: source + "bem/",
      globalcss: source + "bem/global.css",
      reactjs: source + "bem/**/*.js"
    },
    dev: {
      js: dist + "js",
      css: dist + "css/",
      maincss: dist + "css/main.css",
    }
  };

//Сборка common.css
gulp.task("commonCss", function () {
  return gulp
    .src([path.src.commonbemcss])
    .pipe(concat('common.css'))
    .pipe(gulp.dest(path.src.bem));
});

//Сборка desktop.css
gulp.task("desktopCss", function () {
  return gulp
    .src([path.src.descbemcss])
    .pipe(concat('desktop.css'))
    .pipe(gulp.dest(path.src.bem));
});

//Сборка touch.css
gulp.task("touchCss", function () {
  return gulp
    .src([path.src.touchbemcss])
    .pipe(concat('touch.css'))
    .pipe(gulp.dest(path.src.bem));
});

//Сборка desktop.min.css
gulp.task("desktopMinCss", ['desktopCss'], function () {
  return gulp
    .src(path.src.desccss)
    .pipe(
      cssnano({
        //Добавление вендорных префиксов
        autoprefixer: {
          browsers: ["last 50 versions"],
          add: true
        }
      })
    ) //Сжатие css
    .pipe(rename({ suffix: ".min" })) //Ренейм
    .pipe(gulp.dest(path.dev.css)); //Результат
});

//Сборка touch.min.css
gulp.task("touchMinCss", ['touchCss'], function () {
  return gulp
    .src(path.src.touchcss)
    .pipe(
      cssnano({
        //Добавление вендорных префиксов
        autoprefixer: {
          browsers: ["last 50 versions"],
          add: true
        }
      })
    ) //Сжатие css
    .pipe(rename({ suffix: ".min" })) //Ренейм
    .pipe(gulp.dest(path.dev.css)); //Результат
});

//Сборка common компонентов css(global.css + common.css)
gulp.task("mainCss", ['commonCss', "desktopMinCss", "touchMinCss"], function () {
  return gulp
    .src(["app/bem/global.css", 'app/bem/common.css'])
    .pipe(concat('common.css'))
    .pipe(
      cssnano({
        //Добавление вендорных префиксов
        autoprefixer: {
          browsers: ["last 50 versions"],
          add: true
        }
      })
    ) //Сжатие css
    .pipe(rename({ suffix: ".min" })) //Ренейм
    .pipe(gulp.dest(path.dev.css)); //Результат
});

//Сборка reactComponents
gulp.task("reactComponents", function () {
  return gulp
    .src(path.src.reactjs)
    .pipe(concat("reactComponents.js"))
    .pipe(gulp.dest(path.src.components));
  /* return gulp
    .src(path.src.reactjsx)
    .pipe(babel({
      plugins: ['transform-react-jsx', "react-html-attrs"],
    }))
    .pipe(concat("reactComponents.js"))
    .pipe(gulp.dest(path.dev.js)); */
});

//Сборка renderComponents
gulp.task("renderComponents", ["reactComponents"], function () {
  /* return gulp
    .src(path.src.components + 'renderComponents.js')
    .pipe(babel({
      plugins: ["react-html-attrs"],
      presets: ["@babel/preset-env", "@babel/react"]
    }))
    .pipe(gulp.dest(path.dev.js)); */


  let b = browserify({
    entries: path.src.components + 'renderComponents.js',
    debug: true,
    transform: [babelify.configure({
      plugins: ["react-html-attrs"],
      presets: ["@babel/preset-env", "@babel/react"]
    })]
  });

  return b.bundle()
    .pipe(sourcestream('renderComponents.js'))
    .pipe(gulp.dest(path.dev.js));


  /* return  gulp.src(path.src.components + 'renderComponents.js')
  .pipe(browserify({
    transform: ['babelify'],
  }))
  .pipe(gulp.dest('./public/js'))   */

  /* return browserify({
    entries: path.src.components + 'renderComponents.js',
    extensions: ['.js'],
    debug: true
  }).transform('babelify', {
      plugins: ["react-html-attrs"],
      presets: ["@babel/preset-env", "@babel/react"]
    })
    .bundle()
    .pipe(gulp.dest(path.dev.js)); */




  /* return browserify({ entries: './app.jsx', extensions: ['.jsx'], debug: true })
    .transform('babelify', { presets: ["@babel/preset-env", "@babel/react"], plugins: ["react-html-attrs"] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist')); */

  /* return browserify({
    entries: path.src.jsx + 'renderComponents.jsx',
    extensions: ['.jsx'],
    debug: true
  })
    .transform('babelify', {
      //presets: ['es2015', 'react'],
      plugins: ['transform-react-jsx', "react-html-attrs"]
    })
    .bundle()
    .pipe(sourcestream('bundle.js'))
    .pipe(gulp.dest(path.dev.js)); */
});


//Сборка ts
gulp.task("ts", function () {
  return gulp
    .src(path.src.ts)
    .pipe(
      ts({
        noImplicitAny: true,
        target: "es6",
        module: "amd",
        outFile: "main.js"
      })
    )
    .pipe(gulp.dest(path.dev.js));
});

//min js

gulp.task("watch", ["mainCss", "ts", 'renderComponents'], function () {
  gulp.watch([path.src.ts], ["ts"]);
  gulp.watch([path.src.reactjs], ["renderComponents"]);
});
