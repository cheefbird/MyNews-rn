// @flow

import _ from 'lodash';
import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class ArticleCard extends PureComponent {
  setVisibility = (text) => {
    if (text == null) {
      return { visibility: 'hidden' };
    }
  };

  render() {
    const { title, abstract, multimedia } = this.props.article;

    let imageUrl;

    for (var image in multimedia) {
      if (image.format === 'superJumbo') {
        imageUrl = image.url;
      }
    }

    console.log(imageUrl);

    return (
      <Card
        // containerStyle={{ padding: 8 }}
        image={{ uri: imageUrl }}
        imageStyle={styles.image}
        imageProps={{ resizeMode: 'cover' }}
      >
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
        <Text style={styles.descriptionText}>{abstract}</Text>
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

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#f4f4f4',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sourceText: {
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  descriptionText: {
    marginBottom: 10,
    fontSize: 12,
  },
});
