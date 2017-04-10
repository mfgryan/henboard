var board = (function (){

    var _data = [];
    
    var _sprint = {};

    var _pOpen = "<p draggable=\"true\" ondragstart=\"board.dragTask(event,$(this).index(), $(this).parents().eq(1).attr('id'))\">";

    var _pClose = "</p>";

    var _spanInfo = "<span class=\"info\""+ 
        "onclick=\"info.openDialog(board.getSprint()[$(this).parents().eq(2).attr('id')][$(this).parent().index()].val,"+
            "board.getSprint()[$(this).parents().eq(2).attr('id')][$(this).parent().index()].info)\"> i </span>";

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
    
    // if data is empty or it's been more than 14 days, push a new sprint object
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

    // populates the board with data from the current sprint 
    var _updateBoard = function(){
        $('#todo .list').empty().append(_formatColVals("todo"));
        $('#development .list').empty().append(_formatColVals("development"));
        $('#completed .list').empty().append(_formatColVals("completed")); 
    };

    return {
        setData: function(data){
            _data = !data ? [] : data; 
            _checkWeek();
            this.setSprint(0);
        },
        // set which sprint is currently displayed on the board
        setSprint: function(index){
            _sprint = _data.length > 0 ? _data[_data.length-1 - index] : {};
            _updateBoard();
            $('#sprintWeekStart').html(_sprint.week);
        },
        getData: function(){
            return _data; 
        },
        getSprint: function(){
            return _sprint; 
        },
        // add a new task to the given column and current sprint
        addTask: function(column, val, info){
            if(val == "") return;
            _sprint[column].push({"val": val, "info": info});
            _updateBoard();
            io.writeData();
        },
        // remove a task selected by index, column, and current sprint
        removeTask: function(column, index){ 
            _sprint[column].splice(index, 1);
            _updateBoard();
            io.writeData();
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
            this.addTask(columnTo, _sprint[columnFrom][index].val, _sprint[columnFrom][index].info);
            this.removeTask(columnFrom, index);    
        },
        allowDrop: function(e){
            e.preventDefault();    
        }
    };
}());
