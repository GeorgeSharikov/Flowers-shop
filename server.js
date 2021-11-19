import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = 8000
const app = express()

app.use(express.static(path.join(__dirname,'..','build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','build','index.html'));
});

app.listen(PORT, () => console.log('listening...'))
