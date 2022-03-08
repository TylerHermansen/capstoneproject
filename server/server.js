const express = require('express')
const cors = require("cors")

const app = express()

const port = 4242

app.use(express.json())
app.use(cors())

const contrlist = require('./controller')

const {
    addGoal,
    getGoals,
    getProgress,
    getCompleted,
    deleteGoal,
    moveToProgress,
    moveToFinish,
} = contrlist


app.get('/goal', getGoals)
app.get('/prog', getProgress)
app.get('/completed', getCompleted)
app.post('/goal', addGoal)
app.delete('/goal', deleteGoal)
app.put('/goal', moveToProgress)
app.put('/prog', moveToFinish)





app.listen(port, () => console.log(`'Server is live on port ${port}.`))