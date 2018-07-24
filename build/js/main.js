var blur=(function(){
    
    return{
        set:function(){
            var bgblur=document.querySelector('.blur');
            var bgWidth=document.querySelector('.auth').offsetWidth;
             
            bgblur.style.backgroundSize = bgWidth + 'px';

        }
    }
}())

blur.set(); 


window.onresize=()=>{
    blur.set();
}