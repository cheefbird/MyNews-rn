// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Reactotron from 'reactotron-react-native';

import reducers from './reducers';
import ArticleDetail from './screens/ArticleDetail';
import TopNewsList from './screens/TopNewsList';
import ArticleSearch from './screens/ArticleSearch';
import SearchResults from './screens/SearchResults';

const store = Reactotron.createStore(reducers, {}, applyMiddleware(ReduxThunk));

const TopNewsStack = createStackNavigator({
  List: TopNewsList,
  Detail: ArticleDetail,
});

const SearchStack = createStackNavigator({
  Home: ArticleSearch,
  Results: SearchResults,
});

const AppTabs = createBottomTabNavigator(
  {
    TopNews: TopNewsStack,
    Search: SearchStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'TopNews') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#ebebeb',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppTabs />
        </View>
      </Provider>
    );
  }
}
