const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(
      "mongodb+srv://chhokarnavya_db_user:V3KwB7W2MLdusBNw@cluster0.qrlumo7.mongodb.net/day6",
    ).then(()=>{
        console.log("Connected to Database")
    })
}
connectToDb();
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})