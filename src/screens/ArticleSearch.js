import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SearchCard from '../components/SearchCard';

const ArticleSearch = (props) => {
  return (
    <View style={styles.container}>
      <SearchCard />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 18,
  },
};

export default ArticleSearch;
