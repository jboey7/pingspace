import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'Roboto'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Headers!</Typography>
    </ThemeProvider>
  );
};

export default App;
