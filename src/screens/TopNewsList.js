// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import { fetchTopArticles } from '../actions';

import ArticleCard from '../components/ArticleCard';

class TopNewsList extends Component {
  static navigationOptions = {
    title: 'Top News',
  };

  componentDidMount() {
    this.props.fetchTopArticles();
  }

  keyExtractor = (item, index) => item.url;

  renderRow = ({ item }) => (
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
        style={{ backgroundColor: '#f5f5f5' }}
        data={this.props.articles}
        extraData={this.props.articles}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const articles = _.map(state.articles, (val) => ({ ...val }));
  return { articles };
};

export default connect(
  mapStateToProps,
  { fetchTopArticles },
)(TopNewsList);
