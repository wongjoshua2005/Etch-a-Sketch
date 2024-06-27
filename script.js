function createGrid(size, storeGrids)
{
    for (let i = 0; i < size; i++)
    {
        const squareGrid = document.createElement("div");
        squareGrid.setAttribute("class", "grid");
        squareGrid.style.backgroundColor = "white";
        squareGrid.style.border = "0.5px solid";
        squareGrid.style.padding = "15px";
        squareGrid.style.textAlign = "center";  
        storeGrids.appendChild(squareGrid);
    }
}

function initialSetup()
{
    // To make the background-color be filling the the whole body
    document.body.style.backgroundColor =  "lightblue";

    // Container needed for the Etch A Sketch
    const totalGrids = 256;

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(16, 35px)";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    document.body.appendChild(container);

    createGrid(totalGrids, container);
}

initialSetup();