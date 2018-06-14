import React, { Component } from 'react';
import { WebView } from 'react-native';

const ArticleDetail = (props) => {
  const { url } = props;

  return <WebView source={{ uri: url }} />;
};
