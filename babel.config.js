module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
          '.jsx',
        ],
        alias: {
          '@screens': ['./src/screens'],
          '@navigators': ['./src/navigators'],
          '@components': ['./src/components'],
          '@HOC': ['./src/HOC'],
          '@assets': ['./src/assets'],
          '@themes': ['./src/themes'],
          '@unistyles': ['./src/themes/unistyles.ts'],
          '@utils': ['./src/utils'],
          '@services': ['./src/services'],
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
