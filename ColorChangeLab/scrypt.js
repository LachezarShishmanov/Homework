
const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];
// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
// Set the background color of the li to the random color
// Append the li to the ul

// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.

// 1. Create A Function (generate)

const ul = document.querySelector('#color-list')
const generate = () => {
 const randomColor = Math.floor(Math.random()*COLORS_ARRAY.length)
 const li = document.createElement('li')
 li.textContent = COLORS_ARRAY[randomColor]
 li.style.backgroundColor = COLORS_ARRAY[randomColor]
 ul.appendChild(li)
}

const generateBtn = document.querySelector('#generate-color')
generateBtn.addEventListener('click', generate)

const reset = () => {
  while(ul.firstChild){
    ul.firstChild.remove()
  }
}

const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', reset)
   
   
    
   








