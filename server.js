import env from 'dotenv'; env.config()
import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, "client", "build")))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log('listening...'))
