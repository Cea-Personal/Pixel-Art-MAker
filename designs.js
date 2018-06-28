
// Select Color input
// Select Size input
// loads when the function is called by clicking the submit button

$(document).ready(function(){
    $('#sizePicker').submit(function(event){
        event.preventDefault();

        // Get grid sizes
        let gridHeight =$('#inputHeight').val();
        let gridWidth = $('#inputWeight').val();

        // pass the values of the grid sizes as arguments to the makeGrid function
        makeGrid(gridHeight,gridWidth);
    });
});



/**
* @description create the grids using the value of the gris sizes
* @param {number} n - The input for grid height
* @param {number} m - The input for grid width
*/
function makeGrid(n,m){

    $('tr').remove();
    $('#instructions').remove();
    let canvas=$('#pixelCanvas');

    // create rows in tables
    for(let row=1; row<=n; row++){
        canvas.append('<tr></tr>');

        // create cells to rows
        for(let column =1;column <= m; column++){
            $('tr').filter(':last').append('<td></td>');
        }
    }
    //  add colors to cell
    $('td').click(function(){
        let color=$('#colorPicker').val();

        // ternary operators
        $(this).attr('style')? $(this).removeAttr('style'): $(this).attr('style','background-color:' + color);
    });
    // adds instructions to canvas
    canvas.after('<p id="instructions"> Double-clicking on the submit button resets the page.</p>');

    // removes instructions,rows and refreshes the page to default

    $('#sizePicker').dblclick(function(){
        $('#instructions').remove();
        $('tr').detach();
        $('#sizePicker').trigger('reset');
    }
       );

}

// TODO:Create a save button to save previous design as image before creating a new one

