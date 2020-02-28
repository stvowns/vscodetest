const fs = require('fs');

// Blocking Synchronics way
// const txt = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(txt);
// const yazma = `Avakado hakkında bilmeniz gerekenler: ${txt} \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', yazma);
// console.log('dosya yazıldı');

// non-blocking Asynchronics way

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        console.log('Your file was written!!!!');
      });
    });
  });
});

console.log('Will read file');
