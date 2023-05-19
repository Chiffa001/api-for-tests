const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('*', (_, res) => {
    res.json({});
})

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`)
})