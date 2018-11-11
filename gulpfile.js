const gulp = require("gulp"), //gulp
  sass = require("gulp-sass"), //sass
  concat = require("gulp-concat"), //конкатанация
  cssnano = require("gulp-cssnano"), //сжатие css
  rename = require("gulp-rename"), //ренейм
  babel = require('gulp-babel'),
  ts = require("gulp-typescript"); //TypeScript

const source = "./app/",
  dist = "./dist/",
  path = {
    src: {
      js: source + "js/**/*.js",
      ts: source + "js/**/*.ts",
      scss: source + "sass/**/*.scss",
      mainscss: source + "sass/main.scss",
      descbemcss: source + "bem/desktop/**/*.css",
      touchbemcss: source + "bem/touch/**/*.css",
      commonbemcss: source + "bem/common/**/*.css",
      desccss: source + "bem/desktop.css",
      touchcss: source + "bem/touch.css",
      bem: source + "bem/",
      globalcss: source + "bem/global.css",
      reactjsx: source + "bem/**/*.jsx"
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
    .src(path.src.reactjsx)
    .pipe(babel({
      plugins: ['transform-react-jsx', "react-html-attrs"],
    }))
    .pipe(concat("reactComponents.js"))
    .pipe(gulp.dest(path.dev.js));
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

gulp.task("watch", ["mainCss", "ts", 'reactComponents'], function () {
  gulp.watch([path.src.ts], ["ts"]);
  gulp.watch([path.src.reactjsx], ["reactComponents"]);
});
