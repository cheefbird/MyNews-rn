// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createStackNavigator } from 'react-navigation';
import Reactotron from 'reactotron-react-native';

import reducers from './reducers';
import ArticleDetail from './screens/ArticleDetail';
import TopNewsList from './screens/TopNewsList';

// const App = () => (
//   <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
//     <View style={styles.container}>
//       <TopNewsList />
//     </View>
//   </Provider>
// );

const RootStack = createStackNavigator(
  {
    TopNewsList,
    ArticleDetail,
  },
  {
    initialRouteName: 'TopNewsList',
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}
