
console.log("Please enter your subject marks to check your Grade");
const ps = require ('prompt-sync')();
let eng:number=+ps("Enter ENGLISH Score");
let urdu:number=+ps("Enter URDU Score");
let maths:number=+ps("Enter MATHS Score");
let pkst:number=+ps("Enter Pak Studies Score");
let chem:number=+ps("Enter CHEMISTRY Score");
let phy:number=+ps("Enter PHYSICS Score");
function gradingSystem(eng:number,urdu:number,maths:number,pkst:number,chem:number,phy:number){
    return eng+phy+chem+maths+pkst+urdu;
}
let total:number=gradingSystem(eng,urdu,pkst,chem,phy,maths);
console.log(total);
if(total>=550&&total<=600){
    console.log("Your Grade is A+");
}
else if(total>=500&&total<=549){
    console.log("Your Grade is A");
}
else if(total>=470&&total<=499){
    console.log("Your Grade is B+");
}else if(total>=440&&total<=469){
    console.log("Your Grade is B");
}else if(total>=390&&total<=439){
    console.log("Your Grade is C");
}else if(total<350){
    console.log("Your Grade is D");
}else if(total>600){
    console.log("You Have Entered Wrong Marks");
}
else{
    console.log("You have Failed");
}
