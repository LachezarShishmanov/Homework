

// Create Two Functions -> addChild and redWedding
const addChild = () => {
    let newDiv = document.createElement('div')
    newDiv.textContent = "kidd"
    starks.appendChild(newDiv)

    }
    let  starks = document.querySelector(".starks")


const redWedding = () => {
      while(starks.firstChild){
        starks.firstChild.remove()
      }
}

// Attach functions to buttons
const addBtn = document.querySelector("#add-child")
addBtn.addEventListener('click', addChild)
const addBtn1 = document.querySelector("#red-wedding")
addBtn1.addEventListener('click', redWedding)

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)


