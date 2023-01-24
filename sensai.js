import Ninja from "./ninja.js";

//? Given Expected Output
/*
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
-> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
-> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
*/


// ********************** Sensai ********************
// extend Ninja here in the new sensai class
// Ninja is the parent class
    // new class name
            // extend keyword
                    // parent class extending from
class Sensei extends Ninja {
    // inheriting everthing the Ninja class has
    constructor( name ) {
        // this is calling on the parent constructor method
        // using the inherited info
        super('Kurenai Yūhi');
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log('Your greatest limitation is no one else but yourself. Persevere, your hardwork will bare fruit!!');
    }
}

export default Sensei;