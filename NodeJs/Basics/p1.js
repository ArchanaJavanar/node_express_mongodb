const x = 123
let y = 24

if(x > y){
    console.log('x is greater than y')
} else {
    console.log('y is greater than x')
}

for(let i=1; i<=10; i++){
    console.log(x, "*", i , "=", x*i);
}


let users = ['John', 'david', 'Martin', 'Ram']
users.forEach(element => {
    console.log('name =',element);
});

//to execute in cmd command is node followed by file name