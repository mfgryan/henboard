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
