import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log('SearchBar PROPs');
    console.log(props);
    console.log('SearchBar STATE');
    console.log(this.state);
  }

  createPlaceholderText = (content) => `Search ${content} ...`;

  render() {
    const { content } = this.props;
    const placeholderText = this.createPlaceholderText(content);
    return (
      <View style={styles.container}>
        <TextInput
          enablesReturnKeyAutomatically
          placeholder={placeholderText}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={(text) => console.log(text)}
          returnKryLabel="search"
          style={styles.searchInput}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: 200,
    height: 75,
  },
});

export default SearchBar;
