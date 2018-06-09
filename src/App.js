// @flow

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Reactotron from 'reactotron-react-native';

import TopNewsList from './screens/TopNewsList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } });
    Reactotron.warn('*glares*');
    return (
      <View style={styles.container}>
        <TopNewsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#F5FCFF',
  },
});
