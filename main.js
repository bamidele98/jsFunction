function add7(number) {
    return number + 7;
}
console.log(add7(234));

function multiply(number, number2) {
    return number * number2
}
console.log (multiply(20, 30));

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("hELLo WoRLD")); 

function lastLetter(params) {
    let i = params[params.length - 1]
    return i
}
console.log(lastLetter("extract"));
