// @flow

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class ArticleCard extends Component {
  render() {
    console.log('Inside ArticleCard');
    console.log(this.props);
    return (
      <Card
        containerStyle={{ padding: 8 }}
        featuredTitle={this.props.title || 'Title'}
        image={{ uri: this.props.imageUri }}
        titleNumberOfLines={3}
        imageStyle={{ flex: 1, top: 0, left: 0 }}
        imageProps={{ resizeMode: 'cover' }}
      >
        <Text style={{ marginBottom: 10 }}>{this.props.subtitle || 'Subtitle'}</Text>
        <Button raised title={this.props.buttonText} />
      </Card>
    );
  }
}

export default ArticleCard;
