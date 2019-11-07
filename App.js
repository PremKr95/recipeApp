import React, { Component } from 'react';
import AppContainer from './src/navigations/AppNavigation';
import store from './src/redux/store'
import {Provider} from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App;
