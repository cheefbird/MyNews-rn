// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ArticleCard from './ArticleCard';

class ArticleList extends Component {
  render() {
    return <FlatList />;
  }
}

export default ArticleList;
