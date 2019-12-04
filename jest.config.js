module.exports = {
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testMatch: ["**/tests/**/*.spec.ts"]
};
