//Single responsibility
//use one class for one thing. One responsibilty or function.
//This helps to create a clean and modular design.

//GOOD++ because they are each handling completely different things
// Class handling only authorization
class RobotAuth {
  authorization() {
    console.log("Authorization in progress...");
  }
}

// Class handling only settings
class RobotSettings {
  settings() {
    console.log("Settings updated successfully.");
  }
}

// Usage
const auth = new RobotAuth();
auth.authorization();  // Output: Authorization in progress...

const settings = new RobotSettings();
settings.settings();  // Output: Settings updated successfully.

//PYTHON EXAMPLE
// # Class handling only authorization
// class RobotAuth:
//     def authorization(self):
//         print("Authorization in progress...")

// # Class handling only settings
// class RobotSettings:
//     def settings(self):
//         print("Settings updated successfully.")

// # Usage
// auth = RobotAuth()
// auth.authorization()  # Output: Authorization in progress...

// settings = RobotSettings()
// settings.settings()  # Output: Settings updated successfully.


// //BAD-- because its doing 2 different things in one Class:
// This class is handling both authentication and settings (BAD PRACTICE)
// class Robot {
//   authorization() {
//     console.log("Authorization in progress...");
//   }

//   settings() {
//     console.log("Settings updated successfully.");
//   }
// }

// // Usage
// const robot = new Robot();
// robot.authorization();  // Output: Authorization in progress...
// robot.settings();  // Output: Settings updated successfully.

//PYTHON EXAMPLE
// # This class is handling both authentication and settings (BAD PRACTICE)
// class Robot:
//     def authorization(self):
//         print("Authorization in progress...")

//     def settings(self):
//         print("Settings updated successfully.")

// # Usage
// robot = Robot()
// robot.authorization()  # Output: Authorization in progress...
// robot.settings()  # Output: Settings updated successfully.

