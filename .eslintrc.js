module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
        ],
    "rules": {
        "no-console": ["warn", { "allow": ["info", "warn", "error"]}],
        "linebreak-style": ["warn","unix"],
        "quotes": ["warn","double"],
        "semi": ["warn","always"],
        "no-unused-vars": ["warn",{ "vars": "all", "args": "none", "varsIgnorePattern": "React" }],
        "react/jsx-uses-vars": [2]
    }
};
