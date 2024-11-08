const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  ...defaultConfig,
  maxWorkers: 2, // Dosya izleme işçi sayısını azaltarak sistem kaynaklarını koruyabiliriz
};

module.exports = mergeConfig(defaultConfig, config);
