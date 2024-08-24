import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme } from './light';
import { breakpoints } from './breakpoints';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
