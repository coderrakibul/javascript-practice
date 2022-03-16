
function myFunction(){
    var names = ["rakib", "setu", "salma", "rakibul"];
   names.push("hossain");
   names.push("salmasetu");
   names.pop();
   names.shift();
   names.unshift("salmasetu");
   names[3] = "rakibulislam";
   console.log(names.indexOf("salma"));
    for(i = 0; i < names.length; i++);
    return names;
}

console.log(myFunction());


//factorial
function factorial(number){
   fact = 1;
    for(var i = 1; i <= number; i++){
        var fact = fact * i;
    }
return fact
}

console.log(factorial(7));