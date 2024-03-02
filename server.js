const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/userRoutes')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000

dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDb Connected")
})
.catch((e) => {
    console.log("Error:", e)
})

app.use(cors())
app.use(bodyParser.json())
app.use('/user', router)

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})