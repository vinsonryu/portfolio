document.querySelector(".burger").addEventListener('click',
function () {
    document.querySelector('nav').classList.toggle("trans");
    document.querySelector("#bg").classList.toggle("hide")
}
);
document.querySelector(".readmoretext").classList.toggle("display")
document.querySelector(".readmore").addEventListener("click",function () {
    if (this.innerHTML == "readmore...") {
        this.innerHTML = "showless"
    }
    else {
        this.innerHTML = "readmore..."
    }
    document.querySelector(".readmoretext").classList.toggle("display")
    
})

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
        document.querySelector(".nav").classList.add("hide");
    } else {
      document.querySelector(".nav").classList.remove("hide");
    }
}
