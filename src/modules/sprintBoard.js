var sprintBoard = (function (){
    
    var _sprint = {};

    var _spanInfo = "<span class=\"info\""+ 
        "onclick=\"info.openDialog(board.getSprint()[$(this).parents().eq(2).attr('id')][$(this).parent().index()].val,"+
            "board.getSprint()[$(this).parents().eq(2).attr('id')][$(this).parent().index()].info)\"> i </span>";

var _pOpen = "<p draggable=\"true\" ondragstart=\"board.dragTask(event,$(this).index(), $(this).parents().eq(1).attr('id'))\">";

    var _pClose = "</p>";
    
    var _spanRemove = "<span class=\"remove\" onclick=\"board.removeTask($(this).parents().eq(2).attr('id'),$(this).parent().index())\">x</span>"

     
    var _formatColVals = function(col){
        var formattedOutput = "";
        for(var i = 0; i < _sprint[col].length; i++){
            var val = _sprint[col][i].val;
            if(col !== "completed"){
                formattedOutput = formattedOutput + _pOpen + val +  _spanInfo + _spanRemove + _pClose;
            }else{
                formattedOutput = formattedOutput + _pOpen + val +  _spanInfo + _pClose;
            }
        }
        return formattedOutput;
    };

    var _checkWeek = function(){
        var curDate = new Date(); 
        var latestDate = _data.length > 0 ? new Date(_data[_data.length-1].week) : curDate;
        
        if(_data.length <= 0 || date.dayDiff(latestDate, curDate) >= 14){
            _data.push({
                week: date.getDateFormat(date.getMonday(curDate)),
                todo: [],
                development: [],
                completed: []
            });
            board.setSprint(0);
            _updateBoard();
            io.writeData();
        }
    };

    return {
        //TODO move sprint related code from board.js to here
    }
}());
