

module.exports = ()=>{ 
    // $.gulp.task('babel', () =>
    //     $.gulp.src('./source/js/*')
    //             .transform($.babel, {presets: ['es2015']})
    //             .bundle()
    //             .pipe($.gp.sourcemaps.init())
    //             .pipe($.gp.sourcemaps.write('.'))
    //             .pipe($.gulp.dest('./build/js/'))
    // );}
    $.gulp.task('babel', function() {
        var sourcePath = $.paths.app.src,
          bundles = $.paths.app.bundles;
    
        var bundled = bundles.map(function(bundle) {
          return $.browserify({
            entries: sourcePath + bundle,
            debug: true
          })
          .transform($.babel, {presets: ['es2015']})
          .bundle()
          .on('error', $.gp.notify.onError({ title: 'JS' }))
          .pipe($.source(bundle))
          .pipe($.buffer())
          .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
            loadMaps: true
          })))
          .pipe($.gp.if(!$.dev, $.gp.uglify()))
          .pipe($.gp.if($.dev, $.gp.sourcemaps.write('./maps')))
          .pipe($.gulp.dest($.config.root + '/js'));
        });
    
        return $.merge(bundled);
    
      });
}