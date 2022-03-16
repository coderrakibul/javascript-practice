function unitCalculte(feet){
    var feetConverter = feet * 12 + " Inch";
    return feetConverter;
}

console.log(unitCalculte(10));
console.log(unitCalculte(15));
console.log(unitCalculte(22));


function kiloConverter(mile){
    var mileToKilo = mile * 1.60934 + " Kilometer";
    return mileToKilo;
}

console.log(kiloConverter(15));
console.log(kiloConverter(14.5));
console.log(kiloConverter(145));