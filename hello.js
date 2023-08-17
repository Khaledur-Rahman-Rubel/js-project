let slide = document.getElementsByClassName("slide-element");

let count = 1;
setInterval(() => {
    count++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if (count>slide.length) {
        slide[0].classList.add("current");
        count = 1;
    } else {
        currentElement.nextElementSibling.classList.add("current");
    }

    
}, 2000);