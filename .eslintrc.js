module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    "globals": {
        "ko": 1
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
          2,
          2  
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};