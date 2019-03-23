module.exports = {
  collectCoverageFrom: ["js/*.{js,jsx,mjs}"],
  testMatch: ["<rootDir>/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/?(*.)(spec|test).{js,jsx,mjs}"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/config/jest/jest-transformer.js"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};

