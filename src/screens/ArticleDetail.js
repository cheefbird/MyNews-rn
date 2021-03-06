// @flow

import React, { PureComponent } from 'react';
import { WebView } from 'react-native';

// const ArticleDetail = (props) => {
//   const { navigation } = props;
//   const url = navigation.getParam('url', 'http://www.countingthevotes.com/2000/');

//   return <WebView source={{ uri: url }} />;
// };

class ArticleDetail extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Top News'),
  });

  constructor(props) {
    super(props);

    const { navigation } = props;
    const url = navigation.getParam(
      'url',
      'http://www.countingthevotes.com/2000/',
    );

    this.state = { url };
  }

  render() {
    return <WebView source={{ uri: this.state.url }} />;
  }
}

export default ArticleDetail;
