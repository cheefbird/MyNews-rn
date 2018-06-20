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
    const { title, urlToImage, description, source } = this.props.article;
    const formattedSource = `Source: ${source.name.toUpperCase()}`;
    const imageProtocol = _.truncate(urlToImage, {
      separator: ':',
      omission: '',
    });

    let descriptionText;
    let imageUri;

    if (description == null) {
      descriptionText = null;
    } else {
      descriptionText = (
        <Text style={styles.descriptionText}>{description}</Text>
      );
    }

    if (imageProtocol === 'http') {
      imageUri = 'https://placeimg.com/366/150/people.jpg';
    } else {
      imageUri = urlToImage;
    }

    return (
      <Card
        // containerStyle={{ padding: 8 }}
        image={{ uri: imageUri }}
        imageStyle={styles.image}
        imageProps={{ resizeMode: 'cover' }}
      >
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
        <Text style={styles.sourceText}>{formattedSource}</Text>
        {descriptionText}
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
