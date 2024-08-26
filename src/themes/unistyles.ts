import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme } from './light';
import { breakpoints } from './breakpoints';
import { darkTheme } from './dark';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
