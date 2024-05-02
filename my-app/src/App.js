import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './components/pages/homepage';
import SignUp from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Layout from './components/pages/layout';
import AboutPage from './components/pages/about';
import StreamPage from './components/pages/stream';
import MerchPage from './components/pages/merch';
import Checkout from './components/pages/checkout_page';
import ProfilePage from './components/pages/profilepage';
import StatsPage from './components/pages/StatsPage';

// Define the main theme using Material-UI's createTheme
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#ff0000', // Your primary color
    },
    ...(mode === 'dark' && {
      background: {
        default: '#000000', // Black background for dark mode
        paper: '#000000', // Black paper color for dark mode
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: '#212121', // Dark grey text for light mode
            secondary: '#424242', // Light grey text for light mode
          }
        : {
            primary: '#ffffff', // White text for dark mode
            secondary: '#9e9e9e', // Light grey text for dark mode
          }),
    },
  },
});

function App() {
  const [mode, setMode] = useState('light'); // State for theme mode

  const toggleThemeMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/Signup" element={<Layout><SignUp /></Layout>} />
            <Route path="/Signin" element={<Layout><Signin /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/merch" element={<Layout><MerchPage /></Layout>} /> 
            <Route path="/stream" element={<Layout><StreamPage /></Layout>} />
            <Route path="/checkout_page" element={<Layout><Checkout/></Layout>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/stats" element={<Layout><StatsPage /></Layout>} />
          </Routes>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRadius: 1,
            padding: '1rem',
          }}
        >
          This is a {theme.palette.mode} mode theme with custom palette
        </div>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
