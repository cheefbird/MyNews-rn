// @flow

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class ArticleCard extends PureComponent {
  render() {
    const { title, urlToImage, description } = this.props.article;

    return (
      <Card
        containerStyle={{ padding: 8 }}
        featuredTitle={title}
        image={{ uri: urlToImage || 'https://placeimg.com/366/150/people.jpg' }}
        imageProps={{ resizeMode: 'cover' }}
      >
        <Text style={{ marginBottom: 10 }}>{description}</Text>
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

// const ArticleCard = (props) => {
//   const { title, urlToImage, description } = props.article;

//   return (
//     <Card
//       containerStyle={{ padding: 8 }}
//       featuredTitle={title}
//       // TODO: default image only loading sometimes??
//       image={{ uri: urlToImage || 'https://placeimg.com/366/150/people' }}
//       imageProps={{ resizeMode: 'cover' }}
//     >
//       <Text style={{ marginBottom: 10 }}>{description}</Text>
//       <Button raised backgroundColor="#006bcd" title="Read More" />
//     </Card>
//   );
// };
