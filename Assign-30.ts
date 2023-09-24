let usernames = ["admin","soban", "ashiq", "sami", "ali"]
for(let n=0; n<=4; n++){
    if(usernames[n]=="admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${usernames[n]}, thank you for logging in again.`)
}}
