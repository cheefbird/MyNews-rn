// @flow

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class ArticleCard extends PureComponent {
  render() {
    const { title, urlToImage, description } = this.props.article;
    const formattedTitle = title.toUpperCase();

    let backupImage;

    return (
      <Card
        // containerStyle={{ padding: 8 }}
        image={{
          uri: urlToImage || 'https://placeimg.com/366/150/people.jpg',
        }}
        imageStyle={{ backgroundColor: '#f4f4f4' }}
        imageProps={{ resizeMode: 'cover' }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
          {formattedTitle}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 12 }}>{description}</Text>
        <Button
          raised
          backgroundColor="#006bcd"
          title="Read More"
          onPress={this.props.onPress}
        />
      </Card>
    );
  }
}
