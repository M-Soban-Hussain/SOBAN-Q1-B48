function make_shirt (size:string, text:string = "I Love Typescript"):string{
    return `The size of shirt is '${size}' and the text is '${text}'.`;
}
console.log(make_shirt("Large"));
console.log(make_shirt("Medium"));
let ps = require('prompt-sync')();
let size_of_shirt = ps("What should be the size of shirt? ");
let text_on_shirt = ps("What should be the text on the shirt? ");
console.log(make_shirt(size_of_shirt,text_on_shirt));
