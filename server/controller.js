let theGoals = []
let inProgress = []
let isCompleted = []

let idNum = 0

module.exports = {
    getGoals: (req, res) => {
        res.status(200).send(theGoals)
    },
    getProgress: (req, res) => {
        res.status(200).send(inProgress)
    },
    getCompleted: (req, res) => {
        res.status(200).send(isCompleted)
    },
    addGoal: (req, res) => {
        let {title} = req.body
        let incomingGoal = {
            id: idNum,
            title: title
        }
        idNum++
        theGoals.push(incomingGoal)
        console.log('add goal contoller hit')
        res.status(200).send(theGoals)
    },
    moveToProgress: (req, res) => {
        let {goalTitle} = req.body
        for (let i = 0; i < theGoals.length; i++) {
            if (theGoals[i] === goalTitle){
                inProgress.push(theGoals[i])
                theGoals.splice(i, 1)
            }
        }
        res.status(200).send(inProgress)
    },
    deleteGoal: (req, res) => {
        console.log('delete hit')
        let {id} = req.body
        for ( let i = 0; i < theGoals.length; i++){
            if(theGoals[i].id === id){
                theGoals.splice(i, 1)
            }
        }

            res.status(200).send(theGoals)
    },
    moveToFinish: (req, res) => {
        let {proTitle} = req.body
        for (let i = 0; i < inProgress.length; i++){
            if (inProgress[i] === proTitle){
                isCompleted.push(inProgress[i])
                inProgress.splice(i, 1)
            }
        }
        res.status(200).send(isCompleted)
    }


}