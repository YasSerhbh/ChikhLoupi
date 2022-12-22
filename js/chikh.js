
// Birthday
var birthday = new Date('20 Dec 2023').getTime()

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





// Scroller
var scroller = document.querySelector(".scroller")
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight

document.addEventListener("scroll", _ => {
    var scrolltop = document.documentElement.scrollTop
    scroller.style.width = `${(scrolltop / height) * 100}%`
})





// OnClick Menu
var lili1 = document.querySelector(".lili1")
var menu = document.querySelector(".menu")

lili1.onclick = function() {
    if (lili1.style.color === "var(--main-color)") {
        lili1.style.color = "#000"
        lili1.style.setProperty('--transf-before', 'rotateY(90deg)')
        menu.style.display = "none"
    }else {
        lili1.style.color = "var(--main-color)"
        lili1.style.setProperty('--transf-before', 'rotateY(0deg)')
        menu.style.display = "block"
    }
}

document.addEventListener("click", e => {
    if (e.target.classList[0] !== "lili1") {
    if (lili1.style.color === "var(--main-color)") {
        lili1.style.color = "#000"
        lili1.style.setProperty('--transf-before', 'rotateY(90deg)')
        menu.style.display = "none"
    }}
})

var year = new Date().getFullYear()

document.querySelector(".maria").innerHTML = "Created By El Chikh El Loupeeeeeiii  Copyright&copy; 2022"