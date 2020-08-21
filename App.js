import React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './AppContext';
import Root from './Root';
import { Container, Content, Header } from 'native-base';


const App = (props) => {
  return (
    <AppProvider>
      <Root />
    </AppProvider>

  );
};

App.defaultProps = { skipLoadingScreen: false };

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

export default App;

