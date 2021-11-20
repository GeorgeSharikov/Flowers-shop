import env from 'dotenv'; env.config()
import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const root = path.join(__dirname, "client", "build",)
const PORT = process.env.PORT || 3000

const app = express()

app.use('https://my-pet-project-flowers-shop.herokuapp.com/', express.static( path.join(__dirname, "client", "build")))
app.get('*', function (req, res) {
  res.sendFile("index.html", {root});
});

app.listen(PORT, () => console.log('listening...'))
