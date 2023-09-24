let ps = require('prompt-sync')();
let yourAge = ps("What is your Age?") 
if(yourAge<2){
    console.log("You are a Baby.")
}
else if(yourAge>=2&&yourAge<4){
    console.log("You are a Toddler.")
}
else if(yourAge>=4&&yourAge<13){
    console.log("You are a Kid.")
}

else if(yourAge>=13&&yourAge<20){
    console.log("You are a Teenager.")
}

else if(yourAge>=20&&yourAge<65){
    console.log("You are an Adult.")
}

else if(yourAge>65){
    console.log("You are Old.")
}
