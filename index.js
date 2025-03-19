import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Express! 31')
})
app.get('/user/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`)
})

app.post('/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
