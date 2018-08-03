export default function (path, data, cb) {
    $.ajax({
        type: 'POST',
        url: path,
        dataType: 'json',
        data: data,
        success: function(msg){ cb(msg)}
    });    
}