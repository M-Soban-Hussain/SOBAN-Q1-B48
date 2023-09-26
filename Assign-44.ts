let ps = require ('prompt-sync')();

function make_sandwich(...a:string[]){
    console.log("Making a sandwich with the following items.")
    for(let n=0; n<a.length; n++){
        console.log(`${a[n]}\n`)
    }
}
let items:string[] = [];
items.push(ps("What do you want in your sandwich?"));
make_sandwich(...items)
