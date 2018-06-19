// @flow

import _ from 'lodash';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { searchArticles } from '../actions';
import SearchCard from '../components/SearchCard';

class ArticleSearch extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);

    this.searchArticles = this.searchArticles.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.results !== prevProps.results) {
      this.props.navigation.push('Results', {
        articles: this.props.results,
      });
    }
  };

  searchArticles(query) {
    this.props.searchArticles(query);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchCard
          searchFunction={this.searchArticles}
          alertMessage={this.props.helpMessage}
        />
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
  const results = _.map(state.search.results, (val) => ({ ...val }));
  const helpMessage = state.search.infoText;

  return { results, helpMessage };
};

export default connect(
  mapStateToProps,
  { searchArticles },
)(ArticleSearch);
