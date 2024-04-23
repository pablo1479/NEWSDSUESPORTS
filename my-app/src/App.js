import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Homepage from './components/pages/Homepage';

// Define the main theme using Material-UI's createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',  // Custom red color
    },
    text: {
      primary: '#ffffff',  // White text
    },
  },
});

// App component containing the Router and navigation links
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
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
