// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

class SearchCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headlineText}>
          Search Top Headlines for any topic.
        </Text>
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
    marginTop: 100,
    padding: 15,
    margin: 25,
    alignItems: 'center',
    borderColor: 'tomato',
    borderWidth: 1,
    shadowColor: 'grey',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  headlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
