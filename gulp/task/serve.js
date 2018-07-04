'use strict';

module.exports = ()=>{
    $.gulp.task('serve', ()=>{
        $.browserSync.init({
            open: false,
            server: './build'
        });
        $.browserSync.watch('build', $.browserSync.reload);
    })
}