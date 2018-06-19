// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ArticleCard from './ArticleCard';

class ArticleList extends Component {
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

export default ArticleList;
