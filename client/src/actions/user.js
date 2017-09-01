const model = "users";

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

export { CREATE_USER, LOGIN, LOGOUT, createUser, login, logout };
