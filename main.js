// step 1

let sideMenu = document .getElementById("side-menu")
let slider = document .getElementById("slider")
let item = document .getElementById("item")
let imgSlider = document .getElementById("img-slider")
let prev = document.getElementById("prev")
let next = document.getElementById("next")


// step 2

let arrSlider = ["img/samsung-1.jpg","img/samsung-2.jpg","img/samsung-3.jpg","img/samsung-4.jpg"]
let index = 0

let imgInSlider = (idx)=>{
    index = idx
    imgSlider.src = arrSlider[index]
}
next.onclick = ()=>{
    index++
    if (index >= arrSlider.length) {
        index = 0
    }
    imgInSlider(index)
}
prev.onclick = ()=>{
    index--
    if (index < 0 ) {
        index = arrSlider.length-1 
    }
    imgInSlider(index)
}











