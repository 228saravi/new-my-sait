export default function sendAjax(path, data, cb) {
    $.ajax({
        type: 'POST',
        url: path,
        dataType: 'json',
        data: data,
        success: cb(msg)
    });    
}