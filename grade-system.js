
function gradeFunction (mark){
    if(mark >= 33 && mark <= 39){
        console.log("Grade : D");
        return mark;
    }
    else if(mark >= 40 && mark <= 49){
        console.log("Grade : C");
        return mark;
    }
    else if(mark >= 50 && mark <= 59){
        console.log("Grade : B");
        return mark;
    }
    else if(mark >= 60 && mark <= 69){
        console.log("Grade : A-");
        return mark;
    }
    else if (mark >= 70 && mark <= 79){
        console.log("Grade : A");
        return mark;
    }
    else if (mark >= 80 && mark <= 100){
        console.log("Grade : A+");
        return mark;
    }
    else if (mark >= 0 && mark <= 32){
        console.log("Grade : F");
        return mark;
    }
    else{
        console.log("Sorry, Wrong Input");
        return mark;
    }
}

console.log(gradeFunction(25));
console.log(gradeFunction(35));
console.log(gradeFunction(45));
console.log(gradeFunction(55));
console.log(gradeFunction(65));
console.log(gradeFunction(75));
console.log(gradeFunction(85));
console.log(gradeFunction(122));