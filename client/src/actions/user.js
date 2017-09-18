import Api from "../util/api";
import { displayErrorMessages } from "./messages.js";
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
            let api = Api();
            
            // assume they are correct and if api rejects remove them
            localStorage.setItem("email", action.email);
            localStorage.setItem("password", action.password);

            api.read("user").then(function(res){
                action.name = res.data[0].name;
                done(action);
            }).catch(function(err){
                console.log(err); 

                localStorage.removeItem("email");
                localStorage.removeItem("password");

                action = displayErrorMessages(["Invalid username or password"]);

                done(action);
            });

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
