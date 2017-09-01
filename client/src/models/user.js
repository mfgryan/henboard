const users = {};

users.fields = ["name", "email", "password"];

users.primaryKeys = ["email"];

users.validation = {
    name: {
        empty: false,
        maxLength: 20
    },
    email: {
        empty: false,
        maxLength: 100
    },
    password: {
        empty: false,
        maxLength: 50 
    }
};

export default users;
