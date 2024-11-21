let bar = document.querySelectorAll("li");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let fill = document.querySelectorAll(".fill");
let bari = document.querySelectorAll("li i");
let arrow = document.querySelector(".arrow");
let count = 0;
right.addEventListener("click", () => {
    if (count < bar.length - 1) {
        right.classList.add("notAbleToClick");
        fill[count].classList.add("activeSpan");
        count++;
        setTimeout(() => {
            right.classList.remove("notAbleToClick");
            bar[count].classList.add("active");
            bari[count].classList.remove("fa-circle-xmark");
            bari[count].classList.add("fa-circle-check");

        }, 500)
    }
});
left.addEventListener("click", () => {
    if (count > 0) {
        left.classList.add("notAbleToClick");
        if(count == 4){
            bar[count].classList.remove("active");
            bari[count].classList.add("fa-circle-xmark");
            bari[count].classList.remove("fa-circle-check");
            count--;
            fill[count].classList.remove("activeSpan");
        }else{
            bar[count].classList.remove("active");
            bari[count].classList.add("fa-circle-xmark");
            bari[count].classList.remove("fa-circle-check");
            count--;
            fill[count].classList.remove("activeSpan");
        }
        setTimeout(() => {
            left.classList.remove("notAbleToClick");
        }, 500)
    }
});
