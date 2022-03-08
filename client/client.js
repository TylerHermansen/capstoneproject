const host = ('http://localhost:4242/goal')
const hostP = ('http://localhost:4242/prog')
const hostC = ('http://localhost:4242/completed')

console.log("up and good")

function submitHadler(e) {
    e.preventDefault()

    let title = document.querySelector('#goal-insert')
    
    let bodyObj = {
        title: title.value
    }

    addGoal(bodyObj)

    title.value = ''
}

const getGoals = () => {
    axios.get(host).then((res) => {
        const incomingData = res.data
        console.log(incomingData)
        for (let i = 0; i < incomingData.length; i++) {
            let myGoals = document.createElement('li')
            let goalInput = document.createElement('span')
            goalInput.textContent = incomingData[i].title
            myGoals.appendChild(goalInput)
            // let moveButton = document.createElement('button')
            // moveButton.className = 'progress-button'
            // moveButton.textContent = 'in Progress'
            // moveButton.addEventListener('click', moveToProgress)
            // myGoals.appendChild(moveButton)
            let deleteButton = document.createElement('button')
            deleteButton.classname = 'delete-btn'
            deleteButton.textContent = 'Complete'
            myGoals.appendChild(deleteButton)
            document.querySelector('ul').appendChild(myGoals)
            let element = incomingData[i]

            deleteButton.addEventListener('click', () => {
    
                axios.delete(host, {
                    headers: {}, 
                    data: {id: element.id}
                }).then((res) => {
                getGoals()
                location.reload()
                })
            })
        }
    })
}

const getProgress = () => {
    axios.get(hostP).then((res) => {
        const data = res.data
        for (let i = 0; i < data.length; i++){
            let myProg = document.createElement('li')
            let progInput = document.createElement('span')
            progInput.textContent = data[i]
            myProg.appendChild(progInput)
            let moveButton = document.createElement('button')
            moveButton.className = 'finished-button'
            moveButton.textContent = 'finish Goal'
            moveButton.addEventListener('click', moveToFinish)
            myProg.appendChild(moveButton)
            let deleteButton = document.createElement('button')
            deleteButton.classname = 'delete-btn'
            deleteButton.textContent = 'remove'
            deleteButton.addEventListener('click', deleteProgress)
            myProg.appendChild(deleteButton)
            document.querySelector('.goal-div2').appendChild(myProg)
            }
    })
}

const getCompleted = () => {
    axios.get(hostC).then((res) => {
        const data = res.data
        for (let i = 0; i < data.length; i++) {
            let myFin = document.createElement('li')
            let finInput = document.createElement('span')
            finInput.textContent = data[i]
            myFin.appendChild(finInput)
            let deleteButton = document.createElement('button')
            deleteButton.classname = 'delete-btn'
            deleteButton.textContent = 'remove'
            deleteButton.addEventListener('click', deletecompleted)
            myFin.appendChild(deleteButton)
            document.querySelector('.goal-div3').appendChild(myFin)
        }
    })
}

const addGoal = (object) => {

    axios.post(host, object).then((res) => {
        location.reload()
        // let newGoal = document.createElement('li')
        // let newInput = document.createElement('span')
        // console.log(res.data)
        // newInput.innerHTML = res.data[i].title
        // console.log(res.data)
        // newGoal.appendChild(newInput)
        // let moveButton = document.createElement('button')
        // moveButton.className = 'progress-button'
        // moveButton.textContent = 'in Progress'
        // moveButton.addEventListener('click', moveToProgress)
        // newGoal.appendChild(moveButton)
        // let deleteButton = document.createElement('button')
        // deleteButton.className = 'delete-btn'
        // deleteButton.textContent = 'remove'
        // newGoal.appendChild(deleteButton)
        // document.querySelector('ul').appendChild(newGoal)
        // newInput.value = ''

        // deleteButton.addEventListener('click', () => {
        //     console.log('delete hit')

        //     axios.delete(host, bodyThing).then((res) => {
        //     console.log(res.data)
        //     })
        // })
    })
};


document.querySelector('form').addEventListener('submit', submitHadler)





// const moveToProgress = (event) => {
//     event.preventDefault()

//     let pro = event.target.parentNode.firstChild.textContent

//     let goalMade = {
//         goalTitle: pro 
//     }

//     axios.put(host, goalMade)
//     .then((res) => {
//         // document.querySelector('.goal-div3').innerHTML = ''
//         // getCompleted()
//         document.querySelector('.goal-div2').innerHTML =''
//         getProgress()
//         document.querySelector('.goal-div').innerHTML =''
//         getGoals()
//     })

// }

// const moveToFinish = (event) => {
//     event.preventDefault()

//     let pro = event.target.parentNode.firstChild.textContent
//     let proMade = {
//         proTitle: pro
//     }

//     axios.put(hostP, proMade).then((res) => {
//         document.querySelector('.goal-div3').innerHTML =''
//         getCompleted()
//         document.querySelector('.goal-div2').innerHTML =''
//         getProgress()
//         // document.querySelector('.goal-div').innerHTML =''
//         // getGoals()
//     })
// }

getGoals()

// getProgress()

// getCompleted()
