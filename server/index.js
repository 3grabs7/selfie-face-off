const express = require('express')
const fs = require('fs')
const path = require('path')

let selfies = []
fs.readdire('./selfies', (err, files) => {
	files.forEach((file) => {
		selfies.push(file)
	})
})

const app = express()

app.get('/selfies', (req, res) => {
	const selfieIndex = Math.floor(Math.random() * selfies.length)
})

const PORT = 6969
app.listen(PORT, () => {
	console.log(`Listening osv -> ${PORT}`)
})
