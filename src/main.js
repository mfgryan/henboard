hb = {};
hb.loader = loader;
hb.loader.loadRun("io", "readData", [function(data){
    hb.loadRun("board","setData",[data]);
    hb.loadRun("options","setData",[data]);
}]);
