import  sendAjax  from "./sendAjax";
var addJob=(function () {
    let _list = $('.list').toArray();
    let _form =  document.querySelector('.from_addJob');
    let _ulJobs = $('.list-jobs').toArray();
    var _idUpdate;
    $('.button-addJobs').on('click',function (params) {
        
    })
    let from_jobs = document.querySelector('.from_addJob');
    $('.button-addJobs').on('click',function () {    
        if (from_jobs) {
            $(from_jobs).on('submit', prepareSendJobs);
        }
    });
      

    ////////////
    
    _list.forEach(element => {
        $(element).on('mouseover',function () {
            $(element).css('background', '#bdbdbd');
        });
        $(element).on('click',function () {
            $(from_jobs).on('submit', prepareSendMail);
            displayBlock(element); 
            console.log(_form.action);
            _form.action='/admin/updateJob'
            console.log(_form.action);
            _idUpdate = element.id;
            ajaxPostId({_id: element.id})

        })
        $(element).on('mouseout',function () {
            $(element).css('background', 'none');    
        })
    });
    function displayBlock(element) {
        $(_form).css('display', 'flex');
        $(_ulJobs).css('display', 'none'); 
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
    function prepareSendJobs(e) {
        e.preventDefault();
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
    function prepareSendJobs(e) {
        e.preventDefault();
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
}());