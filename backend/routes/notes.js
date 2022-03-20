const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

// ROUTE1: Get All the Notes using: GET "/api/auth/createuser", No login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try{
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// ROUTE2: Add a new Note using: POST "/api/auth/addnote", No login required
router.post("/addnote", fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({min: 5,}),
], 
  async (req, res) => {
      try{
// If there are errors, return Bad request and the errors
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
      title, description, tag, user: req.user.id,
    })
    const savedNote = await note.save()


    res.json(savedNote);
} catch (error){
    console.error(error.message);
      res.status(500).send("Internal server error");
}
})

module.exports = router;