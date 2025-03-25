const containerE1 = document.querySelector(".container");


for (let index = 0; index < 5; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
}

const colorContainerE1s = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerE1s.forEach((colorContainerE1)=>{
        const newColorCode = randomColor();
        // console.log(newColorCode);
        colorContainerE1.style.backgroundColor = "#" + newColorCode;
        colorContainerE1.innerText = "#" + newColorCode;
    });
}

//spacebar 
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        generateColors();
    }
});

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        // console.log(randomNum);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // chars.substring(start, end) extracts a substring from chars, starting at index start and ending at index end (excluding end).
        // randomNum is a randomly generated index within chars.
        // randomNum + 1 ensures that only one character is extracted from chars

        // console.log(colorCode);
    }
    return colorCode;
}