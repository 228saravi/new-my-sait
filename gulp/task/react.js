module.exports = ()=>{ 
    $.gulp.task('buildjsx', function() {
            return $.browserify({
                    entries: './source/reactjs/app.jsx',
                    extensions: ['.jsx'],
                    debug: true
                })
            .transform($.babel, { presets: ['es2015', 'react']})
            .bundle() 
            .on('error', $.gp.notify.onError({ title: 'REACT' }))
            .pipe($.source('app.js'))
            .pipe($.gulp.dest($.config.root + '/react/js'));
            });
}



// gulp.task('build', () => {
//     return browserify({
//             entries: './source/app.jsx',
//             extensions: ['.jsx'],
//             debug: true
//         })
//         .transform('babelify', {
//             presets: ['es2015', 'react'],
//             plugins: ['transform-class-properties']
//         })
//         .bundle()
//         .on('error', function(err){
//             gutil.log(gutil.colors.red.bold('[browserify error]'));
//             gutil.log(err.message);
//             this.emit('end');
//         })
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest('dist'));
// });