// @flow

import React, { Component } from 'react';

import { FlatList } from 'react-native';

import ArticleCard from '../components/ArticleCard';
import staticData from '../helpers/staticData.json';

class TopNewsList extends Component {
  constructor(props) {
    super(props);
    const { articles } = staticData;
    this.state = { articles };
  }

  keyExtractor = (item, index) => item.title;

  renderItem = ({ item }) => (
    <ArticleCard
      title={item.title}
      imageUri={item.urlToImage}
      subtitle={item.description}
      buttonText="See More"
    />
  );

  render() {
    return (
      <FlatList
        data={this.state.articles}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default TopNewsList;
