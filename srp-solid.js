//Single responsibility
//use one class for one thing. One responsibilty or function.
//This helps to create a clean and modular design.

//GOOD++ because they are each handling completely different things
class RobotAuth {
  authorization() {
    //checking your authorization..
    console.log("Authorization in progress...");

  }
}

class RobotSettings {
  settings() {
    //changing your settings..
    console.log("Settings updated successfully.");

  }
}


// //BAD-- because its doing 2 different things in one Class:

// class robot {

//   authorization() {
//     //authorizing....
//   }

//   settings() {
//     //list of settings ready to change
//   }
// }