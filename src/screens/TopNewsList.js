import React, { Component } from "react";

import { Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import staticData from "../helpers/staticData.json";

class TopNewsList extends Component {
  constructor(props) {
    super(props);
    const { articles } = staticData;
    this.state = { newsArticles: articles };
  }

  renderItem = ({ item }) => {
    console.log("INSIDE RENDERITEM");
    console.log(item);
    return (
      <ListItem
        roundAvatar
        title={item.title}
        subtitle={item.description}
        avatar={{
          uri: item.urlToImage
        }}
      />
    );
  };

  render() {
    console.log(this.state.newsArticles);
    return (
      <FlatList
        data={this.state.newsArticles}
        extraData={this.state}
        renderItem={this.renderItem}
      />
    );
  }
}

export default TopNewsList;
