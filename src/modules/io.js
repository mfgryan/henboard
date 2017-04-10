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
