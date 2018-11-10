const gulp = require("gulp"), //gulp
  sass = require("gulp-sass"), //sass
  concat = require("gulp-concat"), //конкатанация
  cssnano = require("gulp-cssnano"), //сжатие css
  rename = require("gulp-rename"), //ренейм
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
      bem: source + "bem/",
      globalcss: source + "bem/global.css",
      mediacss: source + "bem/media.css",
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

//Сборка всех компонентов css(global.css + common.css + media.css)
gulp.task("mainCss", ['commonCss', "desktopCss", "touchCss"], function () {
  return gulp
    .src(["app/bem/global.css", 'app/bem/common.css', 'app/bem/media.css'])
    .pipe(concat('newmain.css'))
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

gulp.task("watch", ["mainCss", "ts"], function () {
  //gulp.watch([path.src.scss], ["mincss"]);
  gulp.watch([path.src.ts], ["ts"]);
});
