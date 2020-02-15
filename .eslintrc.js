module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        semi: [1, 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'max-len': 'off',
        'require-jsdoc': 'off',
        'valid-jsdoc': 'off',
        'no-invalid-this': 'warn',
        'vue/require-prop-type-constructor': 'off',
        'no-throw-literal': 'warn',
        'new-cap': 'warn',
        'no-extend-native': 'warn',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
