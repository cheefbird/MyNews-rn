// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

class SearchCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search all articles!</Text>
        <SearchBar
          content="articles"
          searchFunction={(text) => {
            console.log(text);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    margin: 25,
    alignItems: 'center',
  },
});

export default SearchCard;
