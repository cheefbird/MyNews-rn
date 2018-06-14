import React, { Component } from 'react';
import { View, Text } from 'react-native';

const ArticleSearch = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the search page</Text>
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
