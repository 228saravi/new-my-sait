var blur=(function(){
    
    return{
        set:function(){
            var bgblur=document.querySelector('.auth_from');
            var bgWidth=document.querySelector('.auth').offsetWidth;
             
            bgblur.style.backgroundSize = bgWidth + 'px';
            console.log( );
        }
    }
}())

window.onload=()=>{
    blur.set(); 
}

window.onresize=()=>{
    blur.set();
}