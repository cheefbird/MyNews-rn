// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ArticleCard from '../components/ArticleCard';

class SearchResults extends Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  constructor(props) {
    super(props);
    const articles = props.navigation.getParam('articles');

    this.state = { articles };
  }

  keyExtractor = (item, index) => item.title;

  renderItem = ({ item }) => (
    <ArticleCard
      article={item}
      onPress={() =>
        this.props.navigation.push('Detail', {
          url: item.url,
          title: item.source.name,
        })
      }
    />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.articles}
        renderItem={this.renderItem}
      />
    );
  }
}

export default SearchResults;
