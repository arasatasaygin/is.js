module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        node: true,
        amd: true
    },
    globals: {
        DocumentTouch: false
    },
    rules: {
        indent: ['error', 4]
    }
};
