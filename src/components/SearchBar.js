// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, Animated } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  createPlaceholderText = (content) => `Search ${content} ...`;

  submitQuery = () => {
    this.props.searchFunction(this.state.query);
  };

  render() {
    const { content } = this.props;
    const placeholderText = this.createPlaceholderText(content);

    return (
      <View style={styles.container}>
        <TextInput
          enablesReturnKeyAutomatically
          placeholder={placeholderText}
          placeholderTextColor="tomato"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => this.setState({ query: text })}
          onSubmitEditing={this.submitQuery}
          returnKeyType="search"
          style={styles.searchBar}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  content: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'tomato',
  },
  searchBar: {
    width: 200,
  },
});

export default SearchBar;
