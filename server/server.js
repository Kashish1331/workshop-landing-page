const express = require("express")
const cors = require("cors")

const app = express()

const PORT = 5001

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.post("/api/enquiry", (req, res) => {

  const { name, email, phone } = req.body

  if (!name || !email || !phone) {

    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })

  }

  return res.status(200).json({
    success: true,
    message: "Registration successful"
  })

})

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})