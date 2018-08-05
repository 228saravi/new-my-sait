'use strict';

module.exports=()=>{
    $.gulp.task('clean', ()=>{
        return $.del([
            'build/assets','build/img','build/view','build/react','build/js'
        ]);
    });
};