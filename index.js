var fs = require('fs');
var colors = require('colors')
var StatMode = require('stat-mode');
var newData = './new_data';

fs.stat('./cat.jpeg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
//ZADANIE 17.7
fs.readdir('./new_file',function(err,data){
    if (err) throw err;
    console.log(data)
    console.log('The file has been dir!'.yellow);
    fs.writeFile(newData, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!'.red);
    });
});