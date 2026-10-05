const player1 = {
    name: "Narek",
    level: 5,
    health: 100,
    attack: 30,
    defense: 15,

    inventory: ["sword", "shield", "potion"],

    attackPlayer(opponent) {
        let damage = this.attack - opponent.defense;

        if (damage <= 0) {
            damage = 0;
        }

        console.log(`${this.name} attacks ${opponent.name}`);
        console.log(`Damage: ${damage}`);

        opponent.health -= damage;

        if (opponent.health < 0) {
            opponent.health = 0;
        }

        console.log(`${opponent.name} health: ${opponent.health}`);
        console.log("----------------------");
    },


    isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }
};






const player2 = {
    name: "Vlad",
    level: 6,
    health: 100,
    attack: 40,
    defense: 13,

    inventory: ["Axe", "Potion", "Helmet"],
    
    
    attackPlayer(opponent) {
            let damage = this.attack - opponent.defense;
    
            if (damage <= 0) {
                damage = 0;
            }
    
            console.log(`${this.name} attacks ${opponent.name}`);
            console.log(`Damage: ${damage}`);
    
            opponent.health -= damage;
    
            if (opponent.health < 0) {
                opponent.health = 0;
            }
    
            console.log(`${opponent.name} health: ${opponent.health}`);
            console.log("----------------------");
     },

     isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }
}



function battle(player1, player2) {

    console.log("⚔️ BATTLE START!");
    console.log(`${player1.name} vs ${player2.name}`);
    console.log("======================");

    while (player1.isAlive() && player2.isAlive()) {

        player1.attackPlayer(player2);

        if (!player2.isAlive()) {
            console.log(`${player2.name} is dead!`);
            console.log(`${player1.name} wins!`);
            break;
        }

        player2.attackPlayer(player1);

        if (!player1.isAlive()) {
            console.log(`${player1.name} is dead!`);
            console.log(`${player2.name} wins!`);
            break;
        }
    }
}


const { name, health, attack } = player1;

console.log("Player information:");
console.log(`Name: ${name}`);
console.log(`Health: ${health}`);
console.log(`Attack: ${attack}`);
console.log("======================");



battle(player1, player2);

console.log("After battle:");
console.log(player1);


const winner = {
    ...player2,


    name: "Vlad Champion",
    level: player2.level + 1,
    health: 150
};

console.log("🏆 New Player:");
console.log(winner);


function testScope() {

    let damage = 50;

    console.log("Damage inside function:", damage);
}

testScope();
