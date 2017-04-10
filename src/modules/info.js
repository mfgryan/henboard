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
