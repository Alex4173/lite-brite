(function() {

    var canvas = $('#canvas'); //my placement area - think of paper in drawing
    var updateGridButton = $('#update-grid-button');
    var numberOfColsInput = $('#number-of-cols');
    var numberOfRowsInput = $('#number-of-rows');

    makeGrid(15, 15);
    $('.cell').on('click', changeColor);
    updateGridButton.on('click', updateGridSize);
    //clearGrid();
    //makeGrid(30, 30);

    function updateGridSize(){
      clearGrid(); //remove the current grid
      //grab the number of colums from the input for the new grid
      var newColNumber = parseInt(numberOfColsInput.val());
      //grab the number of rows from the input for the new grid
      var newRowNumber = parseInt(numberOfRowsInput.val());
      //make the new grid based on the new rows and columns
      if(isNan(newColNumber) || newColNumber < 1 || newColNumber > 30){
        newColNumber = 15;
        newRowNumber = 15;
        $('#error').text('Please enter a number between 1 and 30')
      } else { }
      makeGrid(newRowNumber, newColNumber);
      $('.cell').on('click', changeColor);
    }

    function clearGrid(){
      canvas.empty();
    }
    function changeColor(event){
    //just this cells background-color
    $(this).toggleClass('red');
  }
    function makeGrid(numberOfRows, numberOfCols){
      //let's make some rows and put them in the body
      for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1){
        var row = $('<tr></tr>');
        for(var colCount = 0; colCount < numberOfCols; colCount += 1){
          var column = $('<td></td>');
          column.addClass('cell');
          row.append(column);
        }
        canvas.append(row);
      }
    }

}());
