// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { searchArticles } from '../actions';
import SearchCard from '../components/SearchCard';

class ArticleSearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default ArticleSearch;
