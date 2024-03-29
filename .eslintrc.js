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
        'react-hooks',
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
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true, ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': [2, { ignoreComments: true, code: 120 }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
        'no-param-reassign': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 0,
                'max-len': 'off',
            },
        },
    ],
};
