'use strict';

module.exports = ()=>{
    $.gulp.task('img',()=>{
        return $.gulp.src('./source/img/*')
        .pipe($.gp.image())
        .pipe($.gulp.dest('./build/img/'));
    })
}