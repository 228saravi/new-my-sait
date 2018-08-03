`use strict`;

global.$ = {
    dev: true,
    config: require('./gulp/config'),
    paths:{
        task: require('./gulp/paths/tasks.js'),
        app: require('./gulp/paths/app.js')
    },
    config: require('./gulp/config'),
    gulp : require('gulp'),
    del: require('del'),
    browserSync : require('browser-sync'),
    source : require('vinyl-source-stream'),
    buffer : require('vinyl-buffer'),
    babel : require('babelify'),    
    merge: require('merge-stream'),
    browserify : require('browserify'),
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

