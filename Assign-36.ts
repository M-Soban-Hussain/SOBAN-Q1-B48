function make_shirt (size:string, text:string){
    return `The size of shirt is '${size}' and the text is '${text}'.`;
}
let ps = require('prompt-sync')();
let size_of_shirt = ps("What should be the size of shirt? ");
let text_on_shirt = ps("What should be the text on the shirt? ");
console.log(make_shirt(size_of_shirt,text_on_shirt));
