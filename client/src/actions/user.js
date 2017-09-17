const model = "user";

const CREATE_USER = "CREATE_USER";
function createUser(user) {
    return {
        type: CREATE_USER,
        model: model,
        name: user.name,
        email: user.email,
        password: user.password
    };
};

const LOGIN = "LOGIN";
function login(user){
    return {
        type: LOGIN,
        fn: function(store, action, done){
            // login via api
            // assuming success
            localStorage.setItem("email", action.email);
            localStorage.setItem("password", action.password);
            
            //add user name to action 
            action.name = "ryan";
            
            // if failure should change action to login fail first
            done(action);
        },
        model: model,
        email: user.email,
        password: user.password
    };
};

const LOGOUT = "LOGOUT";
function logout(user){
    return {
        type: LOGOUT,
        fn: function(store, action, done){
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            done(action);
        },
        model: model
    };
};

export { CREATE_USER, LOGIN, LOGOUT, createUser, login, logout };
