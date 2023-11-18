const { getDefaultConfig } = require("expo/metro-config");

// 1. Enable CSS for Expo.
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "json", "mjs"],
  },
});

config.resolver.assetExts.push("mjs");

config.resolver.resolverMainFields.unshift("sbmodern");

module.exports = config;
