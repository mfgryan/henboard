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
                        if(_writeQueue.length > 0 ) _writeQueue[0]();
                    }
                });
            })
            if(_writeQueue.length == 1) _writeQueue[0]();
        }
    };
}());

var info = (function (){

    var _data = [];

    var _initDialog = function(selector){
        $(selector).dialog({
            draggable: false,
            closeText: "X",
            modal: true,
            position: {my: "center", at: "center", of: $("#container")},
            width: 600,
            autoOpen: false
        });     
    };

    _initDialog("#infoBox");

    var _liOpen = "<li>";
    
    var _liClose = "</li>";

    var _spanRemove = "<span class=\"remove\" onclick=\"info.removeInfo($(this).parent().index())\">x</span>";
    
    var _containsLink = function(input){
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        return input.match(regex);
    };

    var _formatInfoVals = function(data){
        var formattedOutput = "<ul>";
        for(var i = 0; i < data.length; i++){
            var val = data[i];
            if(_containsLink(val)){
                formattedOutput+= _liOpen + "<a href=\"" + val + "\">" + val + "</a>" + _spanRemove + _liClose;
            }else{
                formattedOutput+= _liOpen + val + _spanRemove + _liClose;
            }
        }    
        return formattedOutput + "</ul>";
    };

    var _updateInfoBox = function(data){
        _data = data;
        io.writeData();
        $("#infoBox .list").empty().append(_formatInfoVals(_data));
    };

    return {
        openDialog: function(title,data){
            _updateInfoBox(data);
            $("#infoBox").dialog({"title": title});
            $("#infoBox").dialog("open");
        },
        getInfo: function(col,index){
            return _data;
        }, 
        addInfo: function(val){
            if(val == "")return;
            _data.push(val);
            _updateInfoBox(this.getInfo());
        },
        removeInfo: function(index){
            _data.splice(index,1);
            _updateInfoBox(this.getInfo());
        }
    };
}());

//TODO make more genearl so it can work with populating any set of options
var options = (function(){
    
    var _data = [];

    var _populateOptions = function (){
        var weeks = $('#weeks');    
        for(var i = _data.length-1; i >= 0; i--){
            weeks.append("<option value=\""+ _data[i] +"\">week "+ _data[i] +"</option>");
        }
        $('#weeks option').eq(0).prop('selected', true);
    };

    return {
        // populate the options tag with a list of sprint weeks
        setData: function(data){
            var weekArray = []
            for(var i = 0; i < data.length; i++){
                weekArray.push(data[i].week); 
            }   
            _data = weekArray;
            _populateOptions();
        }
    }
}());

var menu = (function (){
    var _data = [];

    var _formatOptions = function(data){
        var formattedOutput = "";
        for(var i = 0; i < data.length; i++){
            var val = data[i];
            formattedOutput = formattedOutput + "<li onclick=\"menu.show($(this).html())\">" + val + "</li>" 
        }
        return formattedOutput;        
    };

    var _updateMenu = function(data){
        $('#menuOptions').empty().append(_formatOptions(data));
    };

    return {
        setData: function(data){
            _data = data; 
            _updateMenu(data);
        },
        show: function(val){
            $('#menuOptions').toggle();
            for(var i = 0; i < _data.length; i++){
                if(_data[i] === val){
                    $('#'+_data[i]).show(); 
                }else{
                    $('#'+_data[i]).hide(); 
                }
            } 
        }
    }
}());
menu.setData(["board","backlog"]);

var backlogBoard = (function (){

    return{
        //TODO 
        // very similar to board.
        // make board more general and add a sprintBoard object
    }
}());

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

io.readData(function(data){
    board.setData(data); 
    options.setData(data);
});
