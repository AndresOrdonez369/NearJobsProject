import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import SettingsScreen from './src/screens/SettingsScreen/index';

export default class App extends React.Component  {

  componentDidMount() {
    console.log(store.getState);
  }
  render() {
  return (
    <Provider store={store}>
     <SettingsScreen />
    </Provider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
