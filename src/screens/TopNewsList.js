// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import { fetchTopArticles } from '../actions';

import ArticleCard from '../components/ArticleCard';

class TopNewsList extends Component {
  componentWillMount() {
    console.log('CWM');
    this.props.fetchTopArticles();
    console.log(this.props);
  }

  renderItem(article) {
    return (
      <ArticleCard
        title={article.title}
        imageUri={article.urlToImage}
        subtitle={article.description}
        buttonText="See More"
      />
    );
  }

  render() {
    console.log(this.props);
    return <FlatList data={this.props.articles} renderItem={this.renderItem} />;
  }
}

const mapStateToProps = state => {
  const articles = _.map(state, article => ({ ...article }));
  console.log(articles);
  return { articles };
};

export default connect(
  mapStateToProps,
  { fetchTopArticles },
)(TopNewsList);
