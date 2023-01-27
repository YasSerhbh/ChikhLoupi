
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



// Req Options
var myHeaders = new Headers();
myHeaders.append("apikey", "TtCzYzPHx9j6XU5R70E9dWTb1kGsDR1i");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


document.querySelector(".trr").onclick = function () {

    // Get Symbols
var symbols;
fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.text())
  .then(result => symbols = JSON.parse(result)['symbols'])
  .then(() => {
    for (let i = 0; i < Object.keys(symbols).length; i++) {
    var option = document.createElement("option")
    var option2 = document.createElement("option")
    option.setAttribute("value", Object.keys(symbols)[i])
    option2.setAttribute("value", Object.keys(symbols)[i])
    option.innerHTML = symbols[Object.keys(symbols)[i]]
    option2.innerHTML = symbols[Object.keys(symbols)[i]]
    document.querySelector("#to").appendChild(option)   // 00
    document.querySelector("#from").appendChild(option2)  // 00
  }
  })
  .catch(error => console.log('error', error));


    this.style.transform = "scale(0)"
    setTimeout(_ => {
        this.style.display = "none"
        document.querySelector(".conv").style.display = "flex"
    }, 206)
    setTimeout(_ => {
        document.querySelector(".conv").style.transform = "scale(1)"
    }, 500)
}

// Math.round(JSON.parse(result)['result'])

document.querySelector(".conveert").onclick = function () {
    //   Convert
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${document.querySelector("#to").value}&from=${document.querySelector("#from").value}&amount=${document.querySelector(".amount").value}`, requestOptions)  // 00
      .then(response => response.text())
      .then(result => document.querySelector(".res").innerHTML = `${document.querySelector(".amount").value} ${document.querySelector("#from").value} = ${JSON.parse(result)['result'].toFixed(3)} ${document.querySelector("#to").value}` )   // 00
      .catch(error => console.log('error', error));
}




var year = new Date().getFullYear()
document.querySelector(".maria").innerHTML = `Created By <span style="color: #2196F3;">YasSer</span>. Copyright&copy; ${year}`