import Ninja from "./ninja.js";
import Sensei from "./sensai.js";


// now to instantiate this class -> got an error 1st since I did not have json package file in this folder

const ninja1 = new Ninja('Hinata');

// call on methods to see
// dot notation 
            // ()'s to invoke the method
ninja1.sayName();
ninja1.showStats();


const superSensei = new Sensei ('Kurenai Yūhi');
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();


// now run with node npm run start