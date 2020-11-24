const express = require('express')
const cors = require('cors')
const projects = require('./projects')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.json(projects))

app.listen(PORT, () => console.log('Server is listening at port', PORT))
