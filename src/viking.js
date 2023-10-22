// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`

        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        }
        else
            return (`A Saxon has died in combat`);
    }
}

const viking1 = new Viking("Ragnard", 60, 100)

console.log(viking1);
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        if (viking.name) {
            this.vikingArmy.push(viking)
        } else {
            console.error("Sorry this is not a viking")
        }
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        // We select a random saxon to reveive the attack
        const randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        // And thgen the random viking who is going to attack
        const randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const attackPoints = randomViking.attack();
        // perform the attack
        randomSaxon.receiveDamage(attackPoints);

        // if the saxon is dead, we remove it from the array
        if(randomSaxon.health <= 0 ){
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }

    }
    //     saxonAttack()
    //     showStatus()
}
