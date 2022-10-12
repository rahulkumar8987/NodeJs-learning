const path = require("path");
console.log(path.dirname('C:\Users\rahul\NodeJs-learning\pathmodule\path.js' ));
console.log(path.extname('C:\Users\rahul\NodeJs-learning\pathmodule\path.js' ));
console.log(path.basename('C:\Users\rahul\NodeJs-learning\pathmodule\path.js' ));

const myPath = path.parse('C:\Users\rahul\NodeJs-learning\pathmodule\path.js');
console.log(myPath.root);