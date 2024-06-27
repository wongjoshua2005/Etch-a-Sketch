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

        squareGrid.addEventListener("mouseover", function(){
            this.style.backgroundColor = "grey";
        });

        squareGrid.addEventListener("mouseout", function(){
            this.style.backgroundColor = "black";
        });
    }
}

function askGridNum()
{
    const num = parseInt(prompt("Enter a grid value from 1 to 100: "));

    if (num < 1 || num > 100)
    {
        alert("Invalid value. Please try again.");
    }

    return num;

}

function createContainer(num)
{
    // Container needed for the Etch A Sketch
    const totalGrids = num * num;

    const container = document.createElement("div");
    container.setAttribute("class", "mainContainer");
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${num}, 35px)`;
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    document.body.appendChild(container);

    createGrid(totalGrids, container);
}

function initialSetup()
{
    // To make the background-color be filling the the whole body
    document.body.style.backgroundColor =  "lightblue";

    // Button that asks user to reset the entire grid
    const reset = document.createElement("button");
    reset.textContent = "Reset Grid";
    reset.style.display = "flex";

    reset.addEventListener("click", function() {
        let val = askGridNum();
        const mainContainer = document.querySelector(".mainContainer");
        document.body.removeChild(mainContainer);
        createContainer(val); 
    });

    document.body.appendChild(reset);

    let defaultVal = 16;
    createContainer(defaultVal);
}

initialSetup();