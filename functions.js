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

// critical hit with random function

function randomDamage1(min, max){
    min = Math.ceil(fighter1.damage - 2);
    max = Math.floor(fighter1.damage +2);
    return Math.floor(Math.random() * (max - min) + min);
}

function crtHit (a, b){
    a = Math.ceil(randomDamage1() * 2);
    b = Math.floor(randomDamage1() * 3);
    return Math.floor(Math.random() * (b - a) + a);
}
//console.log(randomDamage1());
//console.log(crtHit());

// crit chance

function crtCh(a, b, z){
    a = 10;
    b = 100;
    c = Math.round(Math.random() * (b - a) + a);
    return c
}

if(crtCh()>70){
    console.log("The fighter punched with a crit hit ", crtHit());
} else if(crtCh()<30){
    console.log("The hitted with a weak punch", wkHit());
}else {
    console.log("Fighter punched with a ordinary ", randomDamage1());
}
// weak punch
function wkHit(){
   let wkpunch = Math.round(randomDamage1() / 2);
    return wkpunch;
}
