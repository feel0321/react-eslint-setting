module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "prettier/prettier": "off",
    "no-nested-ternary": "off",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "import/prefer-default-export": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
