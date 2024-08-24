import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme } from './light';
import { breakpoints } from './breakpoints';
import { darkTheme } from './dark';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
