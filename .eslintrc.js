module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'linebreak-style': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 'warn',
        'react/require-default-props': 0,
        'react/function-component-definition': 0,
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'no-underscore-dangle': 0,
        'i18next/no-literal-string': [2, { markupOnly: true }],
        'max-len': [2, { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
