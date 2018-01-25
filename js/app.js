function makeGrid() {

    var Rows = $('#heighth').val();
    var Cols = $('#widthh').val();
    var table = $('#tableo');



  
    for (var i = 0; i < Rows; i++) {
        table.append('<tr></tr>');
    }

    
    for (var j = 0; j < Cols; j++) {
          table.children().append("<td></td>"); 
    }


};

    