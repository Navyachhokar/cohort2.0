const express = require("express")
const noteModel = require("./models/notes.model")
const cors = require("cors")
const path = require("path")

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static("./public"))
/**
 * POST /api/notes
 * create new note and save data in mongodb
 * req.body = {title, description}
 */
app.post('/api/notes', async(req,res)=>{
    const { title, description } = req.body
    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })

})

/**
 * GET /api/notes
 * Fetch all the notes data from mongodb and send them in the response
 */
app.get("/api/notes",async(req,res)=>{
    const notes = await noteModel.find()// find() method always returns a array and the data is in the form of array of objects 
    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    })
})

/**
 * DELETE /api/notes/:id
 * Delete note with the id from req.params
 */

app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "Note deleted successfully."
    })
})

/**
 * PATCH /api/notes/:id
 * update the description of the note by id
 * req.body = {description}
 */
app.patch('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
    console.log(req.params.id);
    const { title, description } = req.body
    console.log(req.body)

    await noteModel.findByIdAndUpdate(id, { title, description })

    res.status(200).json({
        message:"Note updated successfully"
    })
    
})

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})//if user send a request to an api that doesn't exist than this wildcard will handle it and user will get a respective response.

module.exports = app