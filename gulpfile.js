`use strict`;

global.$ = {
    config: require('./gulp/config'),
    paths:{
        task: require('./gulp/paths/tasks.js')
    },
    gulp : require('gulp'),
    del: require('del'),
    browserSync : require('browser-sync'),
    gp : require('gulp-load-plugins')()
}

$.paths.task.forEach(path => {
    require(path)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'img',
        'babel'
    ),
    $.gulp.parallel(
        'nodemon'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
)
)

