cardlist = document.querySelectorAll(".card-item");
navlist = document.querySelectorAll(".card-link");
navlist[0].classList.add("selected")
navlist.forEach(element => {
    element.addEventListener("click",function(){
        navlist.forEach(element => {
            element.classList.remove("selected")
        });
        element.classList.add('selected');
        var temp = element["id"]
        cardlist.forEach(element => {
            if (element.classList.contains(temp)){
                element.classList.remove("display")
            }
            else {
                element.classList.add("display")
            }
        });
    })
});
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
        document.querySelector(".nav").classList.add("hide");
    } else {
      document.querySelector(".nav").classList.remove("hide");
    }
}


document.querySelector(".clickme").addEventListener("click",function(){
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});