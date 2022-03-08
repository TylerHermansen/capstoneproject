

const goalContainer = document.querySelector('#goal-Container')
const form = document.querySelector('form')

const host = ('http://localhost:4242/goal')
const hostP = ('http://localhost:4242/prog')
const hostC = ('http://localhost:4242/completed')

console.log("up and good")

// const goalCallback = ({ data: theGoals }) => showGoals(theGoals)
// const errorCallback = err => console.log(err.response.data)

const getGoals = () => axios.get(host).then()
const addGoal = bodyObj => axios.post(host, bodyObj).then().then((res) => {
            console.log(res.data)
            //res.data is an array that holds all of the goal objects
            //must loop through res.data and create a title/ insert that title into the parent for each one
            let newGoal = document.createElement('li')
            let newInput = document.createElement('span')
            newInput.textContent = res.data.title
            newGoal.appendChild(newInput)
            let moveButton = document.createElement('button')
            moveButton.className = 'progress-button'
            moveButton.textContent = 'in Progress'
            moveButton.addEventListener('click', moveToProgress)
            newGoal.appendChild(moveButton)
            let deleteButton = document.createElement('button')
            deleteButton.className = 'delete-btn'
            deleteButton.textContent = 'remove'
            deleteButton.addEventListener('click', deleteGoal)
            newGoal.appendChild(deleteButton)
            document.querySelector('ul').appendChild(newGoal)
            input.value = ''
        })
        .catch((err) => console.log(err))

const deleteGoal = id => axios.delete(`${host}/${id}`).then()
const updateGoal = (id, type) => axios.put(`${host}/${id}`, {type}).then()



function submitHadler(e) {
    e.preventDefault()

    let title = document.querySelector('#goal-insert')
    let level = document.querySelector('input[name="level"]:checked')
    
    let bodyObj = {
        title: title.value,
        level: level.value
    }

    addGoal(bodyObj)

    title.value = ''
    level.checked = false
}
function addGoalCard(bodyObj) {
    console.log(res)
    const goalList = document.createElement('div')
    goalList.classList.add('goal-list')

    goalList.innerHTML = `<p class= "goal-title">${bodyObj.title}</p>
    <button onclick="moveToProgress(${bodyObj.id}, 'update progress')"> progress </button>


    <button onclick="deleteGoal(${bodyObj.id})">delete</button>`

    goalContainer.appendChild(goalList)

}

// function showGoals() {
//     const arr = res.data
//     goalContainer.innerHTML = ''
//     console.log(res.data)
//     for (let i = 0; i < arr.length; i++){
//         addGoalCard(arr[i])
//     }
// }

form.addEventListener('submit', submitHadler)

getGoals()