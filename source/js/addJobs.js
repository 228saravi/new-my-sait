var addJob=(function () {
    var from_jobs = document.querySelector('.from_addJob');
    if (from_jobs) {
        from_jobs.addEventListener('submit', prepareSendMail);
      }
      
      function prepareSendMail(e) {
        e.preventDefault();
        console.log();
        let data = {
            head: from_jobs.name.value,
            condision: from_jobs.conditions.value.split('\n'),
            requir: from_jobs.requirements.value.split('\n')
        };
        console.log(data);
        $.ajax({
            type: "POST",
            url: "/admin/addJob",
            dataType: 'json',
            data: data,
            success: function(msg){
                alert( "Прибыли данные: " + msg.status );
            }
        });
        }
}());