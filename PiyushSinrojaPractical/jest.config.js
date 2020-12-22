module.exports = {
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!rn-swipe-button|react-native|@react-navigation)"
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
};