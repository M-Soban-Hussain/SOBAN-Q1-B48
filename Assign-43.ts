let magician_names = ["Ainak-wala-Jinn", "Zakoota Jinn", "Munna-Badmash"];
let new_magician_names:string[] = []

function make_great(x:string[]) :void{  
 for(let a=0; a<x.length; a++){
    new_magician_names.push("The Great " + x[a])
}}

make_great(magician_names)

function show_magicians(a:string[]) :string{
    return (`${a}\n`);
}

console.log(show_magicians(magician_names));
console.log(show_magicians(new_magician_names));
