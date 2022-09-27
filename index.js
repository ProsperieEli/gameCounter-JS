let displayEl = document.getElementById("display1")
let displayEl2 = document.getElementById("display2")
let total = 0
let totalEl = 0

function touchdown() {
touchdowns = 7
total += touchdowns
displayEl.textContent = total
}

function fieldGoal() {
fieldgoals = 2
total += fieldgoals
displayEl.textContent = total
}

function penalty() {
penalties = 3
total += penalties
displayEl.textContent = total
}

function touchdown2() {
touchdowns = 7
totalEl += touchdowns
displayEl2.textContent = totalEl
}

function fieldGoal2() {
fieldgoals = 2
totalEl += fieldgoals
displayEl2.textContent = totalEl
}

function penalty2() {
penalties = 3
totalEl += penalties
displayEl2.textContent = totalEl
}

function newGame() {
    newTotal = 0
    total = newTotal
    totalEl = newTotal

    displayEl.innerText = total
    displayEl2.innerText = totalEl
}