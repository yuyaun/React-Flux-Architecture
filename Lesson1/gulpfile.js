// Base gulp
var gulp = require('gulp');
// Bundle modules with Browserify
var browserify = require('gulp-browserify');
// Concatenates require files
var concat = require('gulp-concat');

// 定義 main.js 為載入的唯一 JS 會將此 JS require 檔案作處理
gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

// Copy index.html 到 dist
gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

// 預定執行 gulp 會執行 browserify、copy
gulp.task('default',['browserify', 'copy']);

// 偵測異動到檔案會執行 default 的 Task
gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default']);
});

// 課後學習
// 1.查詢 gulp-browserify. gulp-concat 套件使用的意義
// 2.gulp.task  gulp.src gulp.dest gulp.watch 功用