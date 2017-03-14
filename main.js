var data = [];

function main(){
    // ajax api request to the json data
    // hard coded for now
    data = [
    {
        week: "03/11/17", 
            todo: ["<p>blah blah blah - </p>", "<p>blah blah blah2 - </p>"], 
            development: ["<p>yo mama - </p>","<p>yo mama 2 - </p>"],
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

    function populateBoard(data){
        var sprint = data[data.length-1]; 

        $('#todo .list').empty().append(sprint.todo);
        $('#development .list').empty().append(sprint.development);
        $('#completed .list').empty().append(sprint.completed); 
    }

    function addData(){
    }

    // function that updates the data and then calls populateBoard again
    // four functions to update data. drag and drop, delete -, add +, change selected week
    // new sprint weeks should auto generate
    // function that sends new data as a post request to write it to the api file
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", main, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", main);
else window.onload = main;

