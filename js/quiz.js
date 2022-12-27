// https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=easy
var question = document.querySelector(".question")
var answers = document.querySelector(".answers")
var selectt = document.querySelector(".sel-cat")
var chooseAnswerButton = document.querySelector(".buttton")
var bulls = document.getElementsByClassName("bull")
var catt = selectt.value;
var data, qq, answs, rightAns, time;
var qNum = 0;
var trueAnswers = 0;
var seconds = 10;

document.querySelector(".ans-1 input").setAttribute("checked", "checked")

document.querySelector(".formaa").onsubmit = () => {
    catt = selectt.value
    document.querySelector(".categ").innerHTML = selectt.options[selectt.selectedIndex].innerHTML
    reqq()
    document.querySelector(".start-game").style.transform = "scale(0)"
    document.querySelector(".game").style.display = "flex"
    setTimeout(() => {
        document.querySelector(".game").style.transform = "scale(1)"
    }, 500)
    setTimeout( () => {
        document.querySelector(".start-game").style.display = "none"
    },501 )
    var counter = setInterval(() => {
        seconds < 10 ? time = `00:0${seconds}` : time = `00:${seconds}`
        document.querySelector(".countdown").innerHTML = time
        seconds--
        if (seconds < 0) {
            chooseAnswerButton.click()
        }
    }, 1000)
    return false
}

function reqq() {
    var req = new XMLHttpRequest()
    req.open("GET", `https://the-trivia-api.com/api/questions?categories=${catt}&limit=10&difficulty=easy`)
    req.send()
    req.onreadystatechange = () => {
        if (req.status === 200 && req.readyState === 4) {
            data = JSON.parse(req.response)
            getData(data)
            putQues(qq, answs)
        }
    }
}
chooseAnswerButton.onclick = function () {
    if (qNum == 10) {
        fin()
    }else {
    if (typeof data !== "undefined") {
        for (let i = 1; i <= 4;i++) {
            if (document.querySelector(`.ans-${i} input`).checked) {
            if (document.querySelector(`.ans-${i} label`).innerHTML == rightAns) {
                trueAnswers++;
            }
        }
    }
    getData(data)
    putQues(qq, answs)
    bulls[qNum - 1].classList.add("on")
    seconds = 10;
}
}
}

function getData(dataa) {
    qq = dataa[qNum]['question']
    answs = [...dataa[qNum]['incorrectAnswers'], dataa[qNum]['correctAnswer']].sort()
    rightAns = dataa[qNum]['correctAnswer']
}


function putQues(ques, anss) {
    question.innerHTML = ques;
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.ans-${i} label`).innerHTML = anss[i-1];
    }
    qNum++
}

var end = document.querySelector(".end-game")

function fin() {
    document.querySelector(".game").style.transform = "scaleX(0)"
    setTimeout(() => {
        document.querySelector(".game").style.display = "none"
    }, 1000)
    end.style.display = "block"
    setTimeout(() => {
        end.style.transform = "scaleY(1)"
    }, 2000)
    if (trueAnswers === 10) {
        document.querySelector(".tit").innerHTML = "Perfect"
        document.querySelector(".tit").classList.add("perfect")
    }else if (trueAnswers < 5) {
        document.querySelector(".tit").innerHTML = "Bad"
        document.querySelector(".tit").classList.add("bad")
    }else {
        document.querySelector(".tit").innerHTML = "Good"
        document.querySelector(".tit").classList.add("good")
    }
    document.querySelector(".grade").innerHTML = `You've Got ${trueAnswers}/10`
}

for (let i = 1; i <=4; i++)
document.querySelector(`.ans-${i}`).onclick = function () {
    document.querySelector(`.ans-${i} label`).click()
}




var year = new Date().getFullYear()
document.querySelector(".maria").innerHTML = `Created By El Chikh El Loupeeeeeiii  Copyright&copy; ${year}`