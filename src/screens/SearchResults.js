// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

class SearchResults extends Component {
  keyExtractor = (item, index) => item.title;

  renderItem = ({ item }) => (
    <ListItem title={item.title} subtitle={item.description} />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.articles}
        renderItem={this.renderItem}
      />
    );
  }
}

export default SearchResults;
