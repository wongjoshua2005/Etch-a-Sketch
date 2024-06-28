/**
 * The gridLayout() method creates the entire grid container that holds
 * each individual square blocks for each row. 
 */
function gridLayout(size)
{
    // Creates the main grid that holds all the square blocks
    const gridContainer = document.createElement("div");
    const main = document.querySelector(".main-container");

    gridContainer.setAttribute("class", "grid-container");
    gridContainer.style.display = "flex";

    // Ensures that individual rows and columns can be created without wrapping
    gridContainer.style.flexFlow = "column nowrap";
    gridContainer.style.height = gridContainer.style.width = "500px";

    main.appendChild(gridContainer);

    createSquares(size, gridContainer);
}

/**
 * The resetButton() creates the functionality necessary to reset the entire
 * grid and create a new grid based on the user's input.
 */
function resetButton()
{
    // Modifies the reset button properties in CSS
    const reset = document.querySelector(".reset");
    reset.style.display = "flex";
    reset.style.justifyContent = "center";
    reset.style.margin = "25px";

    const resetBtn = document.querySelector(".resetBtn");

    // Changes the user's preference of grid size
    resetBtn.addEventListener("click", function(){
        let newSize = parseInt(prompt("Enter a value between 1 to 100"));

        // Ensures the grid size is a valid number
        if (newSize < 1 || newSize > 100)
        {
            alert("Invalid number. Please enter a valid number.");
        }
        else
        {
            // Removes the old grid container and creates new container
            const mainBody = document.querySelector(".main-container");
            const gridBody = document.querySelector(".grid-container");
            mainBody.removeChild(gridBody);

            gridLayout(newSize);
        }
    });

}

/**
 * The createSquares() method creates each individual row for the amount of
 * square sizes to put into the each row.
 */
function createSquares(size, squareContainer)
{
    // Goes through creating each row to store the size squares
    for (let i = 0; i < size; i++)
    {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1"; // Fills the entire space necessary
        squareContainer.appendChild(row);

        // Creates each individual square blocks to fill the row
        for (let j = 0; j < size; j++)
        {
            const square = document.createElement("div");
            square.style.flex = "1"; // Also fills the entire space necessary
            square.style.backgroundColor = "white";
            square.style.border = "1px solid";
            row.appendChild(square);
    
            // To indicate when the user hovers over to create drawing
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = "grey";
            });
    
            square.addEventListener("mouseout", function(){
                square.style.backgroundColor = "black";
            });
        }
    }
}

/**
 * The setup() method runs the entire program with a default grid for the
 * user to create drawings. The method establishes the necessary background
 * and container to hold the grid in one area.
 */
function setup()
{
    // Modifies the body style in CSS
    document.body.style.backgroundColor = "lightblue";

    // Set up the main container to center the grid in one area
    const mainContainer = document.querySelector(".main-container");
    mainContainer.style.display = "flex";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";

    // Runs the reset button when user loads into the web page
    resetButton();

    gridLayout(16); // Default grid
}

setup();