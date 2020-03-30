const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const {users} = require('./routes/index.js')

mongoose.connect( require('./mongolink.js') ||  "mongodb://localhost/minetwork", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once("open", () => console.log("workin properly"));

app.use(express.json());
app.use(cors());

app.use("/api/users", users);



app.get("/", (req, res) => {
  res.json({ team: "owner", project: "minetwork", version: "1.0.0" });
});



app.listen(7000)
