// var QRCode = require('qrcode')

var roles = [
    // 'teacher',
    // 'parent',
    // 'student'
];

for(role of roles) {
    var canvas = document.getElementById('qrcode-' + role);
    // QRCode.toCanvas(canvas, 'https://www.ecaiedu.com/qrdownload/' + role + '.html', { width: 124, margin: 2 }, function (error) {
    //     if (error) console.error(error)
    //     console.log('success!');
    // })
}


console.log('index')