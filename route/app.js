const express = require('express');
const userRoute = require("./routes/userroute.js");
const com = require("./routes/com.js");
const app = express();

const port = 5000;

app.use("/user", userRoute);
app.use("/com", com);

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
});

app.use(express.json());
