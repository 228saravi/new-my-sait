'use strict';
/* var sourceWatch=require('./gulp/paths/sourseWatch.js'); */
 module.exports=function(){ 
    $.gulp.task('watch', function(){
        /* sourceWatch.forEach(element => {
            $.gulp.watch(element[0],$.gulp.series(element[1]));
        }); */
         $.gulp.watch('./source/style/*.scss',$.gulp.series('sass'));
         $.gulp.watch('./source/template/*.pug',$.gulp.series('pug'));
         $.gulp.watch('./source/img/*',$.gulp.series('img'));
     })
 }