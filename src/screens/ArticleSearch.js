// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { searchArticles } from '../actions';
import SearchCard from '../components/SearchCard';

class ArticleSearch extends Component {
  constructor(props) {
    super(props);

    this.searchArticles = this.searchArticles.bind(this);
  }

  searchArticles(query) {
    console.log(query);
    this.props.searchArticles(query);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchCard searchFunction={this.searchArticles} />
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

const mapStateToProps = (state) => {
  const results = _.map(state.searchResults, (val) => ({ ...val }));
  return { results };
};

export default connect(
  mapStateToProps,
  { searchArticles },
)(ArticleSearch);
