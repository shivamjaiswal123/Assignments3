const fs = require('fs');
const { program } = require('commander');

program
  .name('counter')
  .description('CLI to some string')
  .version('0.8.0');

  //for counting words in file
  program.command('countWord')
  .description('count total number of word in a file')
  .argument('<file>', 'string to count words')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err){
            console.log("Something went wrong !!!");
        }
        
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
    })
  });

  //for counting senetences in a file
  program.command('countSentence')
  .description('count total number of sentence in a file')
  .argument('<file>', 'string to count sentence')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err){
            console.log("Something went wrong !!!");
        }
        
        const sentence = (data.split("\n")).length;
        
        console.log(`There are ${sentence} sentence in ${file}`);
    })
  });

program.parse();