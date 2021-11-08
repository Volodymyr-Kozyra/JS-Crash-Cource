//hp and vitality
let hp = 170;
function vitality(){
totalvit = hp * 3;
console.log("total helth of the figther is: ", totalvit);

}

vitality();

// arrow fn
let hp2 = 100;
const totHp = () => hp2 * 3;
console.log("total helth of the figther is: ", totHp());

// expression
let hp3 = 100
const totHp2 = function(){
    return hp3 * 3;

}
console.log("total helth of the figther is: ", totHp2());
