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
