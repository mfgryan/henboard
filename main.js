var data = [];

function main(){
    // ajax api request to the json data
    // hard coded for now
    data = [
    {
        week: "03/11/17", 
            todo: ["<p>blah blah blah <span class='remove'>-</span></p>", "<p>blah blah blah2 <span class='remove'>-</span></p>"], 
            development: ["<p>yo mama <span class='remove'>-</span></p>","<p>yo mama 2 <span class='remove'>-</span></p>"],
            completed: []
    },
    {
        week: "03/17/17",
        todo: [], 
        development: [],
        completed: []
    },
    {
        week: "03/11/24",
        todo: [], 
        development: [],
        completed: []
    }];

    
    // four functions to update data. drag and drop, delete -, add +, change selected week
    // new sprint weeks should auto generate
    // function that sends new data as a post request to write it to the api file
}

function populateBoard(data){
    var sprint = data[data.length-1]; 

    $('#todo .list').empty().append(sprint.todo);
    $('#development .list').empty().append(sprint.development);
    $('#completed .list').empty().append(sprint.completed); 
}

function addData(column){
    var record = $("#" + column + " .insert input[type=text]").val();    
    data[0][column].push("<p>"+record+"</p>"+"<span class='remove'>-</span>");
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", main, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", main);
else window.onload = main;
