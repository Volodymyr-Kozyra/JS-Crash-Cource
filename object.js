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

console.log ("The fighters name is: ", fighter1.name);
console.log ("The main stats of the fighter are: ", fighter1.apHeight);

if (fighter1.isHeDanger){ 
    console.log('You need to be carefull');
}else {
    console.log("dont underisimate him");
}
const fighter2 = {
   name: 'Johny',
   apHeight: 192,
   apWeight: 110,
   agility: 75,
   hp: 100,
   damage: 7,
   isHeDanger: true,
   hit: () => console.log ("miss a hit"),
}

console.log ("The fighters name is: ", fighter2.name);
console.log ("The main stats of the fighter are: ", fighter2.apHeight);
    if (fighter2.isHeDanger){ 
        console.log('You need to be carefull');
    }else {
        console.log("dont underisimate him");
    }

    let fight = "Figter1 vs. Fighter2";
    console.log("The battle between: ", fighter1.name, " and ", fighter2.name);
    console.log("FIGHT");
    const succssesRate1 = (fighter1.agility/fighter2.agility)*100; 
    const succssesRate2 = (fighter2.agility/fighter1.agility)*100;
function randomDamage1(min, max){
    min = Math.ceil(fighter1.damage - 2);
    max = Math.floor(fighter1.damage +2);
    return Math.floor(Math.random() * (max - min) + min);
}
function randomDamage2(min, max){
    min = Math.ceil(fighter2.damage - 2);
    max = Math.floor(fighter2.damage +2);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log (randomDamage1());
console.log (randomDamage2());

