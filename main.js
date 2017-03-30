var date = (function(){
        
    var _MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    
    return {
        getMonday: function (d){
            d = new Date(d);
            var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
            return new Date(d.setDate(diff)); 
        },
        getDateFormat: function(date){
            var dd = date.getDate(); 
            var mm = date.getMonth() + 1;
            var yy = date.getFullYear().toString().substr(-2);
            dd = dd < 10 ? '0'+dd : dd;
            mm = mm < 10 ? '0'+mm : mm;
            return mm+'/'+dd+'/'+yy;
        },
        dayDiff: function (a , b){
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.floor((utc2 - utc1) / (_MILLISECONDS_IN_DAY)); 
        }
    }
}());

var io = (function (){
    var _writeQueue = [];
    return {
        readData: function(callBack){
            $.ajax({
                url: "/api",
                dataType: "json",
                success: callBack,
                error: function(){
                    console.log("read error!");
                    callBack([]);
                }
            });
        },
        writeData: function(){
            _writeQueue.push(function(){
                console.log("read request!");
                $.ajax({
                    url: "/api",
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify(board.getData()),
                    success: function(){
                        _writeQueue.shift();
                        if(_writeQueue.length > 0 ) _writeQueue[0]();
                    },
                    error: function(){
                        console.log("write error!");
                        _writeQueue.shift();
                    }
                });
            })
            if(_writeQueue.length == 1) _writeQueue[0]();
        }
    };
}());

var board = (function (){
    
    var _data = [];
    
    var _sprint = {};

    return {
        setData: function(data){
            _data = !data ? [] : data; 
            this.checkWeek();
            this.setSprint(0);
        },
        // set which sprint is currently displayed on the board
        setSprint: function(index){
            _sprint = _data.length > 0 ? _data[_data.length-1 - index] : {};
            this.populateBoard();
        },
        getData: function(){
            return _data; 
        },
        // populates the board with data from the current sprint 
        populateBoard: function(){
            $('#todo .list').empty().append(_sprint.todo.join(''));
            $('#development .list').empty().append(_sprint.development.join(''));
            $('#completed .list').empty().append(_sprint.completed.join('')); 
        },
        // add a new task to the given column and current sprint
        addTask: function(column, val){
            debugger;
            _sprint[column].push("<p draggable=\"true\" ondragstart=\"board.dragTask(event,$(this).index(), $(this).parents().eq(1).attr('id'))\">"+
                    "<span class=\"task\">"+val+"</span>"+
                    "<span class=\"remove\" onclick=\"board.removeTask($(this).parents().eq(2).attr('id'),$(this).parent().index())\"> &nbsp; x </span></p>");
            this.populateBoard();
            io.writeData();
        },
        // remove a task selected by index, column, and current sprint
        removeTask: function(column, index){ 
            _sprint[column].splice(index, 1);
            this.populateBoard();
            io.writeData();
        },
        // if data is empty or it's been more than 14 days, push a new sprint object
        checkWeek: function(){
            var curDate = new Date(); 
            var latestDate = _data.length > 0 ? new Date(_data[_data.length-1].week) : curDate;
            
            if(_data.length <= 0 || date.dayDiff(latestDate, curDate) >= 14){
                _data.push({
                    week: date.getDateFormat(date.getMonday(curDate)),
                    todo: [],
                    development: [],
                    completed: []
                });
                this.setSprint(0);
                this.populateBoard();
                io.writeData();
            }
        },
        // populate the options tag with a list of sprint weeks
        populateOptions: function (){
            var weeks = $('#weeks');    
            for(var i = _data.length-1; i >= 0; i--){
                weeks.append("<option value=\""+ _data[i].week +"\">week "+ _data[i].week +"</option>");
            }
            $('#weeks option').eq(0).prop('selected', true);
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
            var val = $('#'+columnFrom+' .list p').eq(index).children('.task').html();
            this.removeTask(columnFrom, index);    
            this.addTask(columnTo, val);
        },
        allowDrop: function(e){
            e.preventDefault();    
        }
    };
}());

io.readData(function(data){
    board.setData(data); 
    board.populateOptions();
    board.populateBoard();
});
