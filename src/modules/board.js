var board = (function (){

    var _board = {};

    var _formatColVals = function(col){
        var formattedOutput = "";
        for(var i = 0; i < col.length;i++){
            formattedOutput+= "<p>" + col[i].val + "</p>"; 
        }
        return formattedOutput; 
    };

    // populates the board with data from the current sprint 
    var _updateBoard = function(){
        for(var col in _board){
            if(board.hasOwnProperty(col)){
                var formatter = typeof board[col].formatter === "undefined" ? _formatColVals : board[col].formatter;
                $('#'+col+'.list').empty().append(formatter(board[col].data)); 
            } 
        }
        io.writeData();
    };

    return {
        setBoard: function(board){
            _board = !board ? [] : board; 
        },
        getBoard: function(){
            return _board; 
        },
        // add a new task to the given column and current sprint
        addTask: function(column, val, info){
            if(val == "") return;
            _board[column].data.push({"val": val, "info": info});
            _updateBoard();
        },
        // remove a task selected by index, column, and current sprint
        removeTask: function(column, index){ 
            _board[column].data.splice(index, 1);
            _updateBoard();
        },
        // when a task is dragged save it's column and index
        dragTask: function(e, index, column){
            e.dataTransfer.setData("index", index);     
            e.dataTransfer.setData("columnFrom", column);
        },
        // when a task is dropped delete the old task and add the new task
        dropTask: function(e, columnTo){
            e.preventDefault(); 
            var columnFrom = e.dataTransfer.getData("columnFrom");
            var index = e.dataTransfer.getData("index"); 
            this.addTask(columnTo, _board[columnFrom].data[index].val, _board[columnFrom].data[index].info);
            this.removeTask(columnFrom, index);    
        },
        allowDrop: function(e){
            e.preventDefault();    
        }
    };
}());
