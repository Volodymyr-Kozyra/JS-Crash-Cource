//primitive
document.getElementById("testBtn").onclick = showResult;

function showResult(){
    document.getElementById("dataTypes").innerHTML = "Result: " + res;
    document.getElementById("myDate").innerHTML = Date();
    document.getElementById("variables").innerHTML = 'it is name variable ' + nameTest;
    }

const one = 1;
const nameTest = "Ivan";

let varShouldBeUpdated = null;

const a = 'a';
const A = 'A';

let temp = undefined;

const obj = {
    a: 1,
    name: 'Test',
}

const ar = [];

console.log(one);
console.log('it is name variable', nameTest);

const res = a == A;


console.log('Result: ', res);




