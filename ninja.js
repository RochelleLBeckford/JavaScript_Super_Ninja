// ****************** Ninja Core Assignment *******************

//? Ex. Extend Ninja to the Sensei Class


// class name
class Ninja {
// will run each time a new instance occurs
// __init__ is what the constructor for class in js
                // parameter -> what class needs to create an object
                // name and health are the arguements to pass
                // speed and strength will be created automatically
                // instantiate a new ninja -> create a new ninja for the class
    // this is the state 
    constructor (name) {
        // these are properties of a ninja 
        // this keyword refers to an object
        this.name = name;
        this.health = 150;
        this.speed = 3;
        this.strength = 3;
    }

    // log the ninja's name to the console
    // method since it is a function that belongs to a class
    // these methods are the behaviors
    sayName() {
        console.log("I am a Kunoichi and I possess the Byakugan")
        console.log(this.name); 
    }
    
    // log all the properties 
    showStats() {
                    // this will log all the properties for this class for this specific ninja
        console.log(this); 
    }

    // drink sake should add +10 to health
    drinkSake() {
        console.log('Kanpai!!');
        this.health += 10;
    }
}



// in order to use this class in a different file I need to export this class 
// this class is now available for other classes
// this is module syntax
export default Ninja;