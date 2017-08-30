const users = {};

users.fields = ["name", "email", "password"];

users.primaryKeys = ["email"];

users.validation = {
    users: {
        empty: false,
        maxLength: 20
    }
};

export default users;
