import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Hero from './Components/Hero';
import InfoColumns from './Components/InfoColumns';
import InDev from './Components/InDev';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Hero />
          <InfoColumns />
          <InDev />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
