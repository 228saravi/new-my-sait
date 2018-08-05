import  sendAjax  from './modules/sendAjax.js';
var addJob=(function () {
    let _list = $('.list').toArray();
    let _form =  document.querySelector('.from_addJob');
    let _ulJobs = $('.list-jobs').toArray();
    var _idUpdate;
    let from_jobs = document.querySelector('.from_addJob');
    /////////////////
    $('.button-addJobs').on('click',function (params) {
       
        console.log('sssss');
        displayBlock()
   
        if (from_jobs) {
            $(from_jobs).on('submit', function (event) {
                event.preventDefault();
                console.log();
                let data = {
                    head: from_jobs.name.value,
                    condision: from_jobs.conditions.value.split('\n'),
                    requir: from_jobs.requirements.value.split('\n')
                };
                console.log(data);
                sendAjax('/admin/addJob', data, function(msg){
                        if (msg.status){
                            location.reload();
                        }
                        else{
                            alert("Сообшение"+msg.message);
                        }
                })
            });
        }
    })
    
    
      

    ////////////
    
    _list.forEach(element => {
        $(element).on('mouseover',function () {
            $(element).css('background', '#bdbdbd');
        });
        $(element).on('click',function () {
            //$(from_jobs).on('submit', prepareSendJobsUpdate);
            displayBlock(element); 
            _idUpdate = element.id;
           // ajaxPostId({_id: element.id})

        })
        $(element).on('mouseout',function () {
            $(element).css('background', 'none');    
        })
    });
    function displayBlock() {
        $(_form).css('display', 'flex');
        $(_ulJobs).css('display', 'none'); 
        $('.button-addJobs').css('display', 'none'); 
        
    }
    function ajaxPostId(id){
        $.ajax({
            type: 'POST',
            url: '/admin/idjobs',
            data: id,
            success: function (dataUpdate){
            
                _form.name.value=dataUpdate.name;
                _form.conditions.value = dataUpdate.conditions.join('\n');
                _form.requirements.value = dataUpdate.requirements.join('\n');
            }
        })
    }
    ///////
    function prepareSendJobsUpdate() {
        event.preventDefault();
        console.log();
        let data = {
            head: from_jobs.name.value,
            condision: from_jobs.conditions.value.split('\n'),
            requir: from_jobs.requirements.value.split('\n')
        };
        console.log(data);
        sendAjax('/admin/addJob', data, function(msg){
                alert( "Прибыли данные: " + msg.status );
        })
    }
    function prepareSendJobsAdd(event) {
        event.preventDefault();
        console.log();
        let data = {
            head: from_jobs.name.value,
            condision: from_jobs.conditions.value.split('\n'),
            requir: from_jobs.requirements.value.split('\n')
        };
        console.log(data);
        sendAjax('/admin/addJob', data, function(msg){
                console.log(msg);
                // if (msg.status){
                //     location.reload();
                // }
                // else{
                //     alert("Сообшение"+msg.message);
                // }
        })
    }


}());