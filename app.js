// load the environment variables from the env file
require("dotenv").config()
const express = require("express")
const dbConnection = require("./db/config")

const app = express()

// to parse automatically
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to the db
dbConnection(process.env.MONGO_URI)

///////////////////////////////////////////////////////

// routers
const donateRouter = require("./routers/donation")
const registerRouter = require("./routers/register")
const productRouter = require("./routers/search")
const associationRouter = require("./routers/associations")

app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome! Donation API.</h1>
  <p>This is a donation API that lets you add donations to the database.</p>
  `)
})
app.use(donateRouter)
app.use(registerRouter)
app.use(productRouter)
app.use(associationRouter)

///////////////////////////////////////////////////////

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Server is up and running on port " + port)
  console.log("All Done Successfully")
})
