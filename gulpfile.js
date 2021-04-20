var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); //图片压缩
var uglify = require("gulp-uglify");//js压缩
// var sass = require("gulp-sass");//sass压缩
// var concat = require("gulp-concat");//js合并


/*
    常用方法
    gulp.task   定义任务
    gulp.src    找到要执行的任务文件
    gulp.dest   执行任务文件的去处
    gulp.watch  观察文件是否发生变化
*/

// //拷贝文件,找到src/*.html文件,拷贝到dist文件夹下
// gulp.task("copyHtml",function(){
//     gulp.src("src/*.html")
//         .pipe(gulp.dest("dist"))
// })

// //压缩图片,找到src/images/下的图片,压缩到dist/images文件夹下
// gulp.task("imageMin",function(){
//     gulp.src("src/images/*")
//         .pipe(imagemin())
//         .pipe(gulp.dest("dist/images"))
// })

// //压缩sass,找到src/sass/下的sass文件,压缩成dist/css文件夹下的css文件
// gulp.task("sass",function(){
//     gulp.src("src/sass/*")
//         .pipe(sass().on("error",sass.logError)) //监听error事件，有的话打印
//         .pipe(gulp.dest("dist/css"))
// })

//压缩js
gulp.task("minify",done=>{
    gulp.src("dist/vendors.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
    done();
})

// //代码合并,将src/js下的所有js文件合并压缩成dist/js下的new.js文件
// gulp.task("concact",function(){
//     gulp.src("src/js/*.js")
//         .pipe(concat("new.js"))
//         .pipe(uglify())
//         .pipe(gulp.dest("dist/js"))
// })

// //定义默认任务,数组里的是任务名字,同时执行多个任务
// gulp.task("default",["copyHtml","imageMin","sass","minify"])

// //监听文件是否发生变化,如有变化就执行数组里的任务
// gulp.task("watch",function(){
//     gulp.watch("src/*.html",["copyHtml"]);
//     gulp.watch("src/images/*",["imageMin"]);
//     gulp.watch("src/sass/*",["sass"]);
//     gulp.watch("src/js/*.js",["concact"]);
// })