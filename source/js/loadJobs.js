// $('.block-menu__jobs').one('click',function () {
//     $.ajax({
//         type: 'POST',
//         url: '/admin/unloadJob',
//         success: function(msg){
//             alert( "Прибыли данные: " + msg.status );
//         }
//     })
// })


var _list = $('.list').toArray();
var _form =  document.querySelector('.from_addJob');
var _ulJobs = $('.list-jobs').toArray();
_list.forEach(element => {
    $(element).on('mouseover',function () {
        $(element).css('background', '#bdbdbd');
    });
    $(element).on('click',function () {
       
        displayBlock(element); 
    })
    $(element).on('mouseout',function () {
        $(element).css('background', 'none');    
    })
});
function displayBlock(element) {
    $(_form).css('display', 'flex');
    $(_ulJobs).css('display', 'none'); 
    console.log( $(element).toArray());
}