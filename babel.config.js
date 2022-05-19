module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@contexts": "./src/contexts",
          "@generated": "./src/__generated__",
          "@network": "./src/network",
          "@styles": "./src/styles",
          "@assets": "./src/assets",
          "@svg": "./src/assets/svg",
          "@utils": "./src/utils",
          "@redux": "./src/redux",
          "@components": "./src/components",
          "@scenes": "./src/scenes",
          "@navigations": "./src/navigations",
          "@services": "./src/services",
          "@models": "./src/models",
          "@response": "./src/services/response"
        }
      }
    ],
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ]
  ]
};