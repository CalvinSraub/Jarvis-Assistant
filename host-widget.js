const express = require('express')

var cors = require('cors')
var app = express()

app.use(cors())
app.use('/dist', express.static('dist'))
// app.use('/assets', express.static('apps/insight-lite/src/assets'))
console.log('listening on port 4396!')

app.listen(4396)
