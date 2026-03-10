const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json()); // middleware to be used to automatically parse incoming request bodies that are formatted as JSON


/*
  -Creating POST API /notes
  -req.body => {title,description}
*/
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});

/**
 * - GET /notes
 * - fetch all the notes Data 
 */
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

module.exports = app;
