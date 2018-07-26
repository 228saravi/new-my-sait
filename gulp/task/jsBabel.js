

module.exports = ()=>{ 
    $.gulp.task('babel', () =>
        $.gulp.src('./source/js/*.js')
                .pipe($.gp.sourcemaps.init())
                .pipe($.gp.babel({
                    presets: ['env']
                }))
                .pipe($.gp.sourcemaps.write('.'))
                .pipe($.gulp.dest('./build/js/'))
    );}