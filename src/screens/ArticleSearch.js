import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchCard from '../components/SearchCard';

const ArticleSearch = (props) => {
  return (
    <View style={styles.container}>
      <SearchCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});

export default ArticleSearch;
