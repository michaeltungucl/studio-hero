const white = document.querySelectorAll(".white");
const container = document.querySelector(".container");

for (let i = 0; i < white.length; i++) {
    white[i].setAttribute("index", i);
    white[i].addEventListener("mouseover", (e) => {
        
        // const x = e.clientX;
        // const el = e.target.getBoundingClientRect().x;
        // console.log(x, el);
        // container.style.transform = `translateX(${(el - x) * 10}px)`
        container.style.transform = `scaleX(0.6)`;
        white[i].style.transform = `scaleX(0.${i})`; 
        let range = 0.1;
        for (let j = i; j < i + 8; j++) {
            // white[j].style.transform = `scaleX(${range})`;
            white[j].style.transform = `scaleX(${range})`;
            range += 0.2;
        }
        let range2 = 0.1;
        for (let j = i; j > i - 8; j--) {
            white[j].style.transform = `scaleX(${range2})`;
            range2 += 0.2;
        }
    })
}


// rect[i].style.transform = `scaleX(0.2)`;
// rect[i+1].style.transform = `scaleX(0.4)`;
// rect[i+2].style.transform = `scaleX(0.6)`;
// rect[i-1].style.transform = `scaleX(0.4)`;
// rect[i-2].style.transform = `scaleX(0.6)`;