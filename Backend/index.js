const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path');

require("./db/connection.js")
const userRouter = require("./routes/userRoute.js")

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', userRouter);

app.listen(4000,()=>{
    console.log("server on port 4000")
})
