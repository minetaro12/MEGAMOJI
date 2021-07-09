module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
  },
  extends: [
    "airbnb-base",
    "plugin:compat/recommended",
    "plugin:vue/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      webpack: { config: "webpack.config.js" },
    },
  },
  rules: {

    // basic style modifications
    indent: ["error", 2],
    quotes: ["error", "double"],

    // redundant "else" can help readablity
    "no-else-return": "off",

    // ternary ops aren't that unreadable IMO
    "no-nested-ternary": "off",

    // bitwise ops are sometimes useful
    "no-bitwise": "off",

    // "continue" can help readablity as like "early-return"
    "no-continue": "off",

    // allow named export
    "import/prefer-default-export": "off",

    // allow multiple attrs per line
    "vue/max-attributes-per-line": "off",

    // TEMPORARILY allow empty line around html tags
    "vue/multiline-html-element-content-newline": "off",

    // fns and classes can be referred before defined
    "no-use-before-define": ["error", {
      // functions: true,
      // classes: true,
      functions: false,
      classes: false,
      variables: true,
    }],

    // do not enforce destructuring for arrays (since they can be rather unreadable sometime)
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        // array: true,
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // arithmetic ops (eccept for "%" and "**") can be mixed without parens
    "no-mixed-operators": ["error", {
      groups: [
        ["%", "**"],
        // ['%', '+'],
        // ['%', '-'],
        ["%", "*"],
        ["%", "/"],
        // ['/', '*'],
        ["&", "|", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!=="],
        ["&&", "||"],
      ],
      allowSamePrecedence: false,
    }],

    // labels are allowed to break nested loops
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "ForOfStatement",
      // 'LabeledStatement',
      "WithStatement",
    ],
    "no-labels": ["error", {
      // allowLoop: false,
      allowLoop: true,
      allowSwitch: false,
    }],

    // omit extensions
    "import/extensions": ["error", {
      js: "never",
      ts: "never",
    }],

  },
};
