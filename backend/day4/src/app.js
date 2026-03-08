const express = require("express");

const app = express();/* server create ho jata h */

app.use(express.json())//express.json is middleware while app.use() is the method to use middleware.This must be done to let the server read the req.body

const notes = []

app.get("/", (req,res)=> {
    res.send("hello world")
})
// POST notes
app.post("/notes", (req,res) => {
    console.log(req.body)// server by default cannot read data in req.body (when data is complex , use body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created");
})

app.get("/notes", (req,res) => {
    res.send(notes)
})
// DELETE /notes
// params
//delete /notes/index(0-n)
app.delete("/notes/:index", (req,res) =>{//as index value is not known so use : , this indicates that value is going to be dynamic
    console.log(req.params.index)//when value is single digit or data is single, can use params

    delete notes[req.params.index]
    res.send("notes deleted successfully")//anything deleted is just gets replaced by null 
})

/*PATCH /notes/:index */
/* req.body = {description :- "sample modified description"} */

app.patch("/notes/:index", (req,res)=> {
    notes[req.params.index].description = req.body.description

    res.send("Notes updated successfully")
})
module.exports = app