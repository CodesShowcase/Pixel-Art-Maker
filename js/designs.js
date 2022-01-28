const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker  = document.getElementById('sizePicker');
const colorInput  = document.getElementById('colorPicker');
let   colorValue  = colorInput.value;

// Select color input
colorInput.addEventListener('input', () => {
    colorValue = colorInput.value;
    //console.log(colorValue);
});

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', (event) => {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {

    const grid = document.getElementById('pixelCanvas');
    const columns = document.getElementById('inputWidth').value;
    const rows    = document.getElementById('inputHeight').value;

    grid.replaceChildren();
    
    for(let i = 0; i < rows; i++) {
        let row = grid.insertRow();
        for(let j = 0; j < columns; j++) {
            let column = row.insertCell();
        }
    }

    // I advanced the Pixel Art a little bit and build some advanced features into it

    // changing to jQuery - 'cause it is easier
    // possibility one - good, so here on the second click field will be changed back to white again
    /*
    $('#pixelCanvas').on('click', 'td', function () {
        if ($(this).css('background-color') == "rgba(0, 0, 0, 0)") {
            $(this).css('background-color', colorValue);
        } else {
            $(this).css('background-color', "#ffffff");
        }
    });
    */

    // second possibility - better on single click field will be changed to selected color on double click to white again
    $('#pixelCanvas').on('click', 'td', function () {
        $(this).css('background-color', colorValue);
    });

    $('#pixelCanvas').on('dblclick', 'td', function () {
        $(this).css('background-color', "#ffffff");
    });

}