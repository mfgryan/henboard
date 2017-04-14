var loader = (function(){
    var _module = "";

    var _method = "";

    var _args = [];

    return{
        setAll: function(module,method,args){
            _module = module;
            _method = method;
            _args = args;
        },
        getAll: function(){
            return [_module,_method,_args];
        },
        run: function(module,method,args){
            window.hb[module][method].apply(window[module], args);
        },
        load: function(module, callBack){
            $.ajax({
                url: "/modules/" + module + ".js",
                dataType: "script",
                success: callBack,
                error: function(){console.log("module not found!");}
            });
        },
        loadRun: function(module,method,args){
            this.setAll(module,method,args);
            if(typeof window.hb[module] === "undefined"){
                this.load(module,function(data, textStatus, jqXHR){
                    console.log(_module + " module loaded!");
                });
            }else{
                this.run(module,method,args);
            }
        }
    }
}());
