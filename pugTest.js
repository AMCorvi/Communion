var pug = require('pug');

var compiledTemplate = pug.compileFile('./views/index.pug');

console.log(compiledTemplate);