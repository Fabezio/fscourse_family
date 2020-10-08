let scoreTmp = 0
let tmpNb = 0
// let nb = 0
let scoreActuel = [0, 0]
const nbImg = 6
const bonusImg = 3
const penaltyImg = 5
let penalty = false
let bonus = false
let indexPlayer = 1
let boolPlay = true
const winGame = 200
const el1 = document.querySelector(`.part1`).firstElementChild
const el2 = document.querySelector(`.part2`).firstElementChild

// const players = [1, 2]

document.querySelector(".score-1").textContent = "0"
document.querySelector(".score-2").textContent = "0"
resetScore()

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (boolPlay) {
        const rndNb = Math.ceil(Math.random() * nbImg)
        document.querySelector(".image-roll").src = `./pics/${rndNb}.png`
        if (rndNb == 4 && tmpNb == 6) {
            scoreTmp += 200
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp
        } else if (rndNb == bonusImg) {
            scoreTmp += 30
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp
        } else if (rndNb != penaltyImg) {
            scoreTmp += rndNb
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp
        } else { //carte pouilleux
            // scoreTmp = 0
            togglePlayer()
            // document.querySelector(".current-score-"+indexPlayer).textContent = rndNb
            // scoreTmp += 0

        }

        tmpNb = rndNb

    }
})

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (boolPlay) {

        // console.log("garde la monnaie ")
        let thisPlayer = indexPlayer - 1
        scoreActuel[thisPlayer] += scoreTmp
        document.querySelector(".score-" + indexPlayer).textContent = +scoreActuel[thisPlayer]

        // scoreActuel[thisPlayer] += parseInt(scoreTmp)
        if (scoreActuel[thisPlayer] >= winGame) {
            document.querySelector(".name-" + indexPlayer).textContent = "winner".toUpperCase()
            // selectPlayer()
            el1.classList.remove("active")
            el2.classList.remove("active")
            boolPlay = false
        } else {
            togglePlayer()
        }

    }


})

function resetScore() {
    document.querySelector(".current-score-1").textContent = "0"
    document.querySelector(".current-score-2").textContent = "0"

}
// } 
function togglePlayer() {
    indexPlayer == 1 ? indexPlayer = 2 : indexPlayer = 1
    scoreTmp = 0
    resetScore()
    // selectPlayer()
    el1.classList.toggle("active")
    el2.classList.toggle("active")
}