const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({Message: "Home com"})
});

router.post("/com", (req, res) => {
    res.status(200).json({Message: "Post com"})
});

router.delete("/com", (req, res) => {
    res.status(200).json({Message: "Delete com"})
});

router.patch("/com", (req, res) => {
    res.status(200).json({Message: "Updatexom" })
});

module.exports=router;