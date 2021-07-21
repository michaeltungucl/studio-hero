const white = document.querySelectorAll(".white");
const whiteContainer = document.querySelectorAll(".white-container");
const container = document.querySelector(".container");

for (let i = 0; i < white.length; i++) {
    // white[i].setAttribute("index", i);
    // whiteContainer[i].setAttribute("index", i);
    // whiteContainer[i].style.transform = `translateX(10px)`;
    whiteContainer[i].addEventListener('mouseover', (e) => {

        console.log(e.x, whiteContainer[i].offsetLeft);
        const mouseX = e.x;
        const divX = whiteContainer[i].offsetLeft;
        const x = mouseX - divX;
        container.style.transform = `translateX(${x}px)`;
        let range = 2;
        whiteContainer[i].style.minWidth = `2px`;
        for (let j = i; j < i + 20; j++) {
            whiteContainer[j].style.minWidth = `${range}px`;
            range += 5;
            
        }
        let range2 = 2;
        for (let j = i; j > i - 20; j--) {
            whiteContainer[j].style.minWidth = `${range2}px`;
            range2 += 5;
            
        }
    })
    
}


// const hoverEffect = (e) => {
//     // const x = e.clientX;
//     // const el = e.target.getBoundingClientRect().x;
//     // console.log(x, el);
//     // container.style.transform = `translateX(${(el - x) * 10}px)`
//     // container.style.transform = `scaleX(0.6)`;
//     // let containerWidth = 35 * 0.1;
//     // whiteContainer[i].style.width = `${containerWidth}px`;
//     // white[i].style.transform = `scaleX(0.${i})`;
//     // white[i].style.transformOrigin = "left top";
    
//     // let range = 0.1;
//     // for (let j = i; j < i + 8; j++) {
//     //     // white[j].style.transform = `scaleX(${range})`;
//     //     white[j].style.transform = `scaleX(${range})`;
//     //     whiteContainer[j].style.width = `${containerWidth}px`;
//     //     white[j].style.transformOrigin = "left top";
//     //     containerWidth += 0.2;
//     //     range += 0.2;
//     // }
//     // let range2 = 0.1;
//     // let containerWidth2 = 35 * 0.1;
//     // for (let j = i; j > i - 8; j--) {
//     //     white[j].style.transform = `scaleX(${range2})`;
//     //     whiteContainer[j].style.width = `${containerWidth2}px`;
//     //     white[j].style.transformOrigin = "left top";
//     //     containerWidth2 += 0.2;
//     //     range2 += 0.2;
//     // }
//     console.log(e, e.target.clientWidth);
//     const x = e.pageX - container.offsetLeft;

//     // const x = e.clientX;
//     // // const el = e.target.getBoundingClientRect().x;
//     // container.style.transform = `translateX(${x}px)`
//     let range = 2;
//     whiteContainer[i].style.minWidth = `2px`;
//     for (let j = i; j < i + 10; j++) {
//         whiteContainer[j].style.minWidth = `${range}px`;
//         range += 5;
//         whiteContainer[j].removeEventListener("mouseover", hoverEffect);
//     }
//     let range2 = 2;
//     for (let j = i; j > i - 10; j--) {
//         whiteContainer[j].style.minWidth = `${range2}px`;
//         range2 += 5;
//         whiteContainer[j].removeEventListener("mouseover", hoverEffect);
//     }
// }
// whiteContainer[i].addEventListener("mouseover", hoverEffect)