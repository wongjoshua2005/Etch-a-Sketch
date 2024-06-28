function createGrids(size, gridContainer)
{
    for (let i = 0; i < size; i++)
    {
        const square = document.createElement("div");
        square.setAttribute("class", "squareFunction");
        square.style.backgroundColor = "white";
        square.style.padding = "10px";
        square.style.border = "1px solid";
        gridContainer.appendChild(square);

        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = "grey";
        });

        square.addEventListener("mouseout", function(){
            square.style.backgroundColor = "black";
        });
    }
}

function resetButton()
{
    // Reset Button
    const resetContainer = document.createElement("div");
    resetContainer.style.display = "flex";
    resetContainer.style.justifyContent = "center";
    resetContainer.style.alignItems = "center";
    document.body.appendChild(resetContainer);

    const btn = document.createElement("button");
    btn.style.margin = "20px";
    btn.textContent = "Reset Grid";
    resetContainer.appendChild(btn);

    btn.addEventListener("click", function(){
        let newSize = parseInt(prompt("Please enter a new size from 1 to 100"));

        if (newSize < 1 || newSize > 100)
        {
            alert("Invalid number. Please click me again!");
        }
        else
        {
            const gridContainer = document.querySelector(".grid-container");
            document.body.removeChild(gridContainer);
            const newGridContainer = document.createElement("div");
            
            newGridContainer.setAttribute("class", "grid-container");
            document.body.appendChild(newGridContainer);
            initialSetup(newSize);
        }
    });
}

function initialSetup(size)
{
    // Add background color and modifications to the body
    document.body.style.backgroundColor = "lightblue";

    // Grid Creations
    const container = document.querySelector(".grid-container");
    container.style.display = "flex";
    container.style.border = "1px solid";
    container.style.width = container.style.height = "350px";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    document.body.appendChild(container);

    let currentSize = 0, gridSize = size;

    while (currentSize < size)
    {
        const subContainer = document.createElement("div");
        subContainer.setAttribute("class", "subContainer");
        container.appendChild(subContainer);
        createGrids(gridSize, subContainer); // Default grid size
        currentSize++;
    }
}

resetButton();
initialSetup(16);