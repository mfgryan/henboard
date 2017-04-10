var ajaxLoader = (function(obj, method, args){
    //if obj not defined shoot an ajax request for the module
    //call back if successful call method with args on the object
    //if fail say module not found
}());

io.readData(function(data){
    board.setData(data); 
    options.setData(data);
});
