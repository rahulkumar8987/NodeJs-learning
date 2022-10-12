const fs = require("fs");
// before started Async file we have to use call back function

// fs.writeFile("read.txt", "Hello World :)",(err) => {
//    console.log("files is created");
//    console.log(err);
// });

// we pass them a function as an argument -a callback -
// thats gets called when task completes

// the callback has an argument that tells you wether the operation completes succesfully.

// fs.appendFile("read.txt", "please follow instruction how the callback function use after task completed",  (err) => {
//     console.log("Task completed successfully")
// });
fs.readFile("read.txt", "UTF-8", (err, data)=> {
console.log(data);
})
