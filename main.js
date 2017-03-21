var main = function (){
    // ajax api request to the json data
    // hard coded for now
    var data = [
    {
        week: "03/11/17", 
            todo: [], 
            development: [],
            completed: []
    },
    {
        week: "03/17/17",
        todo: [], 
        development: [],
        completed: []
    },
    {
        week: "03/25/17",
        todo: [], 
        development: [],
        completed: []
    }];

    var sprint = data[data.length-1]; 

    var populateBoard = function(){
        $('#todo .list').empty().append(sprint.todo.join(''));
        $('#development .list').empty().append(sprint.development.join(''));
        $('#completed .list').empty().append(sprint.completed.join('')); 
    };
    
    var addData = function(column){
        var record = $("#" + column + " .insert input[type=text]").val();    
        sprint[column].push("<p>"+record+
                "<span class=\"remove\" onclick=\"main.removeData($(this).parent(),$(this).parents().eq(2).attr('id'))\"> &nbsp; x </span></p>");
        populateBoard();
    };

    var removeData = function(node, column){ 
        sprint[column].splice($(node).index(), 1);
        populateBoard();
    };

    var setSprint = function(node){
        sprint = data[data.length-1 - $('#weeks').prop('selectedIndex')];
        populateBoard();
    };

    var populateOptions = function (){
        var weeks = $('#weeks');    
        for(var i = data.length-1; i >= 0; i--){
            weeks.append("<option value=\""+ data[i].week +"\">week "+ data[i].week +"</option>");
        }
        $('#weeks option').eq(0).prop('selected', true);
    };

    populateOptions();

    //generate week function
    //see if >= 14 days from most recent week
    //if true data.push new week object

    //drag and drop function
    //save data to json on changes

    return {
        data: data,
        sprint: sprint,
        populateBoard: populateBoard,
        addData: addData,
        removeData: removeData,
        setSprint, setSprint
    }
}();
main.populateBoard();
