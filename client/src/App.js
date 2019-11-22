import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingCard from './components/LandingCard';
import AboutMe from './components/AboutMe'
import Prog from './components/Prog'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3a7cec',
    },
    secondary: {
      main: 'rgb(69, 69, 69)',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Header />
          <LandingCard />
          <AboutMe />
          <Prog />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
