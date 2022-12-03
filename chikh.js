
var birthday = new Date('20 Dec 2022').getTime()

var dayss = document.getElementById("days")
var hourss = document.getElementById("hours")
var minutess = document.getElementById("minutes")
var secondss = document.getElementById("seconds")

var counter = setInterval(() => {
    var timeNow = new Date().getTime()

    var diff = birthday - timeNow

    var days = Math.floor(diff / (1000 * 3600 * 24))
    var hours = Math.floor(diff % (1000 * 3600 * 24) / (1000 * 3600))
    var minutes = Math.floor(diff % (1000 * 3600) / (1000 * 60))
    var seconds = Math.floor(diff % (1000 * 60) / 1000)

    dayss.innerHTML = days < 10 ? '0' + days : days
    hourss.innerHTML = hours < 10 ? '0' + hours : hours
    minutess.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondss.innerHTML = seconds < 10 ? '0' + seconds : seconds

    if (diff < 0) {
        clearInterval(counter)
    }

}, 1000)