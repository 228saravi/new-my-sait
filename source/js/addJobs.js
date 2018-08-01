var addJob=(function () {
    var from_jobs = document.querySelector('.from_addJob');
    if (from_jobs) {
        from_jobs.addEventListener('submit', prepareSendMail);
      }
      
      function prepareSendMail(e) {
        e.preventDefault();
        let data = {
            head: from_jobs.name.value,
            condision: from_jobs.conditions.value,
            requir: from_jobs.requirements.value
        };
        console.log('sss');
        $.ajax({
            type: "POST",
            url: "/admin/addJob",
            data: data,
            success: function(msg){
                alert( "Прибыли данные: " + msg.status );
            }
        });
        }
}());