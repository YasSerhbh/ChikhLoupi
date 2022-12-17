
var alph = "abcdefghijklmnopqrstuvwxyz"

for (el of alph) {
    var span = document.createElement("span")
    span.className = "letter"
    span.innerHTML = el.toUpperCase()
    document.getElementsByClassName("letters")[0].appendChild(span)
}

var categories = {
    Clubs: ["Manchester City", "Liverpool", "Barcelona", "Juventus", "Arsenal", "Tottenham", "Borussia Dortmund"],
    Players: ["Erling Haaland", "Cristiano", "Messi", "De Bruyne", "Alvarez", "Mbappe", "Neymar", "Dybala", "Maddison", "Kane"],
    Countries: ["Algeria", "England", "France", "Argentina", "Spain", "Norway", "Portugal", "Brazil", "Germany", "Qatar", "Italy", "United States", "Canada", "Mexico"],
    Cities: ["Tokio", "Paris", "Oran", "London", "Manchester", "Roma", "Berlin", "New York", "Leeds", "Oslo"]
}

var categoriesArr = Object.keys(categories)
var randomCategory = categoriesArr[Math.floor(Math.random() * categoriesArr.length)]
document.querySelector(".category").innerHTML = `Category: ${randomCategory}`

var randomCatWords = categories[randomCategory]
var randomWord = randomCatWords[Math.floor(Math.random() * randomCatWords.length)]
console.log(randomWord)

var randomWArray = randomWord.split("").map(el => el.toLowerCase())

randomWArray.forEach((el,ind) => {
    var span = document.createElement("span")
    if (el === " ") {
        span.className = "harf-space"
        span.innerHTML = "-"
    } else {
    span.className = `harf`
    span.classList.add(`harf-${ind}`)
    }
    document.querySelector(".word").appendChild(span)
});

var wrongss = 0;
var rights = 0;
document.addEventListener("click", e => {
    if (e.target.className === "letter") {
        e.target.classList.add("Clicked")

        var clickedLett = e.target.innerHTML.toLowerCase()
        
        var wrongs = 0; 
        randomWArray.forEach((lett, ind) => {
            if (clickedLett === lett) {
                document.querySelector(`.harf-${ind}`).innerHTML = lett.toUpperCase()
                rights++;
                document.querySelector(".corr").play()
            }else {
                wrongs++;
                if (wrongs >= randomWArray.length) {
                    wrongss++;
                    document.querySelector(".rong").play()
                document.querySelector(".draw").classList.add(`wrong-${wrongss}`)
        }
        }
        })
        if (randomWord.includes(" ")) {
            if (rights + 1 >= randomWArray.length) {
            won()
            }
        }else {
            if (rights >= randomWArray.length) {
                won()
            }
        }

        if (wrongss >= 7) {
            fail()
        }
    }
})

function won() {
    if (wrongss > 0) {
    document.querySelector(".yw").innerHTML = `You Have Won With ${wrongss} Wrong Attempts`
}else {
    document.querySelector(".yw").innerHTML = `You Have Won With ${wrongss} Wrong Attempts (Wa3er)`
    }
    document.querySelector(".woon").classList.add("show")
    document.querySelector(".boo").style.display = "block"
    document.querySelector(".gagne").style.display = "block"
    document.querySelector(".woon-2").style.display = "none"
}

document.querySelector(".cls").onclick = ( _ => {
    document.querySelector(".woon").style.display = "none"
    document.querySelector(".boo").style.display = "none"
})

document.querySelector(".cls-2").onclick = ( _ => {
    document.querySelector(".woon-2").style.display = "none"
    document.querySelector(".boo").style.display = "none"
})

function fail() {
    document.querySelector(".yw-2").innerHTML = `The Word is "${randomWord}"`
    document.querySelector(".woon").style.display = "none"
    document.querySelector(".woon-2").classList.add("show")
    document.querySelector(".boo").style.display = "block"
    document.querySelector(".gagne").style.display = "block"
}