'use strict';

module.exports = ()=>{
    $.gulp.task('serve', ()=>{
        $.browserSync.init({
            proxy: 'http://localhost:3000',
            port: 4000
        });
        // $.browserSync.watch('build', $.browserSync.reload);
    })
}