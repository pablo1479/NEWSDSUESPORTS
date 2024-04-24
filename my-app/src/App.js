import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './components/pages/Homepage';
import SignUp from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Layout from './components/pages/layout';
import AboutPage from './components/pages/about';
import StreamPage from './components/pages/stream';
// import StatsPage from './components/pages/stats';


// Define the main theme using Material-UI's createTheme


const theme = createTheme({
  palette: {
    primary: {
      main: '#D41736', // Custom red color
    },
    text: {
      primary: '#333', // Dark grey text
    },
  },
});
// App component containing the Router and navigation links
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/Signup" element={<Layout><SignUp /></Layout>} />
          <Route path="/Signin" element={<Layout><Signin /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          {/* <Route path="/merch" element={<MerchPage />} /> */}
          <Route path="/stream" element={<Layout><StreamPage /></Layout>} />
          {/* <Route path="/stats" element={<Layout><StatsPage /></Layout>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

// Main component that wraps the App with the ThemeProvider
function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS for material components */}
      <App />
    </ThemeProvider>
  );
}

// Render the Main component into the DOM
ReactDOM.render(<Main />, document.getElementById('root'));
export default App; // Ensure this line is present to export 'App'
