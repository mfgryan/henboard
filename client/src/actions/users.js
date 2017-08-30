const model = "users";

const INIT_USER = "INIT_USER";
function initUser() {
    return {
        type: INIT_USER,
        model: model,
        skipValidation: true
    };
}

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
        model: model,
        email: user.email,
        password: user.password
    };
};

const LOGOUT = "LOGOUT";
function logout(user){
    return {
        type: LOGOUT,
        model: model
    };
};

export { INIT_USER, CREATE_USER, LOGIN, LOGOUT, initUser, createUser, login, logout };
