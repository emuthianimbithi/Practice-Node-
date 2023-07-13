const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({Message: "Home"})
});

router.post("/users", (req, res) => {
    res.status(200).json({Message: "Post"})
});

router.delete("/users", (req, res) => {
    res.status(200).json({Message: "Delete"})
});

router.patch("/users", (req, res) => {
    res.status(200).json({Message: "Update"})
});

module.exports = router;