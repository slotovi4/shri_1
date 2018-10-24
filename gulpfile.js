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
      ts: source + "js/video-monitoring-scripts/*.ts",
      scss: source + "sass/**/*.scss",
      mainscss: source + "sass/main.scss"
    },
    dev: {
      js: dist + "js",
      css: dist + "css/",
      maincss: dist + "css/main.css"
    }
  };

//Препроцессинг scss
gulp.task("scss", function() {
  return gulp
    .src([path.src.mainscss])
    .pipe(sass().on("error", sass.logError)) //Преобразование scss в css
    .pipe(gulp.dest(path.dev.css)); //Результат
});

//Препроцессинг css
gulp.task("mincss", ["scss"], function() {
  return gulp
    .src([path.dev.maincss])
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
gulp.task("ts", function() {
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

gulp.task("watch", ["mincss", "ts"], function() {
  gulp.watch([path.src.scss], ["mincss"]);
  gulp.watch([path.src.ts], ["ts"]);
});
