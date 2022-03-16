function addNumbers(numbers){
    let sum = 0;
    for(let i = 1; i <= numbers; i++){ 
        if(i % 2 == 1){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(addNumbers(100));