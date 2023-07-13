const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);


// const user = new User(
//     {
//         Username: "hubby",
//         name: "hubba hubba",
//         age: 21
//     }
// );

// user.save()
// .then(() => {console.log("Saved");})
// .catch((err) => {console.log("Error: " + err);});