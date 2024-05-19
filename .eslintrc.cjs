module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "@electron-toolkit/eslint-config-ts/recommended"
    // '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};
