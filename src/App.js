// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';

import TopNewsList from './screens/TopNewsList';
import reducers from './reducers';

const App = () => (
  <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <View style={styles.container}>
      <TopNewsList />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#F5FCFF',
  },
});

export default App;
