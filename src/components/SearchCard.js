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
          searchFunction={this.props.searchFunction}
        />
        <Text style={styles.alertMessage}>{this.props.alertMessage}</Text>
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
  alertMessage: {
    marginTop: 10,
    paddingHorizontal: 25,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchCard;
