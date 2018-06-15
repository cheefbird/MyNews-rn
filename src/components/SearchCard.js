import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchCard extends Component {
  render() {
    return (
      <View>
        <Text>Search all articles!</Text>
        <SearchBar platform="android" placeholder="Search articles ..." />
      </View>
    );
  }
}

export default SearchCard;
