module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@mocks': './src/mocks',
          '@api': './src/api',
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
