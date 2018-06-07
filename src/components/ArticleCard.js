import React, { Component } from "react";
import { Card, Text, Button } from "react-native-elements";

class ArticleCard extends Component {
  render() {
    return (
      <Card>
        <Text h2>{this.props.title}</Text>
        <Text>{this.props.subtitle}</Text>
        <Button raised title={this.props.buttonText} />
      </Card>
    );
  }
}

export default ArticleCard;
