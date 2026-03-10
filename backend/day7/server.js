require("dotenv").config() //will not be able to access variable from env file in server without this line
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000, () => {
  console.log("server running  at port 3000");
});
