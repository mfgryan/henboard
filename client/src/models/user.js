const user = {};

user.fields = ["name", "email", "password"];

user.primaryKeys = ["email"];

user.validation = {
    email: {
        empty: false,
        maxLength: 100
    },
    password: {
        empty: false,
        maxLength: 50 
    }
};

user.isLoggedIn = function(state){ 
    return state.user[0].email !== "";
};

export default user;
