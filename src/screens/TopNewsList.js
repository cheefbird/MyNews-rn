import React, { Component } from "react";

import { Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import { staticData } from "../helpers/static-data";

class TopNewsList extends Component {
  constructor(props) {
    super(props);
    const { articles } = staticData;
    this.state = { articles };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = item => {
    <ListItem
      title={item.title}
      subtitle={item.description}
      leftAvatar={{
        source: item.urlToImage && { uri: item.urlToImage }
      }}
    />;
  };

  render() {
    console.log(this.state.articles);
    return (
      <FlatList
        data={this.state.articles}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default TopNewsList;
