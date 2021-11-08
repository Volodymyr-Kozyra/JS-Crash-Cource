//hp and vitality
let hp = 170;
const fighter1 = {
    name: 'Tank',
    apHeight: 185,
    apWeight: 120,
    agility: 65,
    hp: 110,
    damage: 9,
    isHeDanger: false,
    hit: () => console.log ("miss a hit"),
}
function vitality(){
totalvit = fighter1.hp * 3;
console.log("total helth of the figther is: ", totalvit);

}

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


///test on the fighter


vitality();
