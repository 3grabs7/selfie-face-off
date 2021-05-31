const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

let selfies = []
fs.readdir('./selfies', (err, files) => {
	files.forEach((file) => {
		selfies.push(file)
		console.log(file)
	})
	console.log(selfies)
})

const app = express()
app.use(cors())

app.get('/selfienames', (req, res) => {
	res.send({ FileNames: selfies })
})

app.get('/:imgname', (req, res) => {
	res.sendFile(__dirname + '\\selfies\\' + req.params.imgname)
})

const PORT = 6969
app.listen(PORT, () => {
	console.log(`Listening osv -> ${PORT}`)
})
