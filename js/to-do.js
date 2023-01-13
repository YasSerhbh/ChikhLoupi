var check = document.querySelectorAll(".check")
var app = document.querySelector(".app")
var button = document.querySelector(".bb")
var txtInput = document.querySelector(".aa")
var tasks = document.querySelector(".tasks")


var arrTasks;
if (localStorage.getItem("tasks") == null || localStorage.getItem("tasks") == '[]') {
    arrTasks = [];
}else {
    arrTasks = JSON.parse(localStorage.getItem("tasks"))
}

addTasksFromLocal(arrTasks)

document.addEventListener("click" ,  (e) => {
    if (e.target.className == "check" && e.target.hasAttribute("checked") == false) {
        e.target.toggleAttribute("checked")
        for (el of arrTasks) {
        el.id == e.target.getAttribute("id") ? el.done = true : el.done = el.done
        }
        addTasksToLocal(arrTasks)
    }else if (e.target.hasAttribute("checked")) {
        e.target.removeAttribute("checked")
        for (el of arrTasks) {
        el.id == e.target.getAttribute("id") ? el.done = false : el.done = el.done
    }
    addTasksToLocal(arrTasks)
}
    for (el of check) {
        if (el.hasAttribute("checked")) {
            el.parentElement.className = "task checked"
        }else {
            el.parentElement.className = "task"
        }
    }
    if (e.target.className == "del") {
        arrTasks = arrTasks.filter(ee => ee.id != e.target.parentElement.getAttribute("id"))
        e.target.parentElement.remove()
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }
})


button.onclick = function () {
    if (txtInput.value !== "") {
    createTask(txtInput.value)
    addTasksToLocal(arrTasks)
    txtInput.value = ""
}}



function createTask(value) {
    var d = Math.floor(Math.random() * 1000000)
    
    arrTasks.push({val: value, id: d, done: false})
    var div = document.createElement("div")
    div.setAttribute("class", "task")
    div.setAttribute("id", d)
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.setAttribute("class", "check")
    input.setAttribute("id", d)
    var label = document.createElement("label")
    label.setAttribute("for", d)
    label.innerHTML = value
    var del = document.createElement("button")
    del.className = "del"
    del.innerHTML = "X"
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(del)
    tasks.appendChild(div)
    check = document.querySelectorAll(".check")
}


function addTasksToLocal(arr) {
    localStorage.setItem("tasks", JSON.stringify(arr))
}

function addTasksFromLocal(arr) {
    if (arr.length > 0) {
    for (el of arr) {
    var d = el.id
    var div = document.createElement("div")
    el.done ? div.setAttribute("class", "task checked") : div.setAttribute("class", "task")
    div.setAttribute("id", d)
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.setAttribute("class", "check")
    input.setAttribute("id", d)
    el.done && input.setAttribute("checked", "checked")
    var label = document.createElement("label")
    label.setAttribute("for", d)
    label.innerHTML = el.val
    var del = document.createElement("button")
    del.className = "del"
    del.innerHTML = "X"
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(del)
    tasks.appendChild(div)
    }
    check = document.querySelectorAll(".check")
}
}




// DARK MODE
var light = document.querySelector(".light")
var night = document.querySelector(".night")

if (localStorage.getItem("theme") != null) {
document.body.className = localStorage.getItem("theme")
}else {
document.body.className = "light"
}

theme()

function theme() {
if (document.body.className == "dark") {
    light.innerHTML = '<i class="fa-regular fa-sun"></i>'
    night.innerHTML = '<i class="fa-solid fa-moon"></i>'
}else {
    light.innerHTML = '<i class="fa-solid fa-sun"></i>'
    night.innerHTML = '<i class="fa-regular fa-moon"></i>'
}
}

light.onclick = function () {
    document.body.className = "light"
    localStorage.setItem("theme", "light")
    theme()
}

night.onclick = function () {
    document.body.className = "dark"
    localStorage.setItem("theme", "dark")
    theme()
}

// DARK MODE