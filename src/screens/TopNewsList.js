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

  render() {
    console.log(this.state.articles);
    return <Text>This will be a list.</Text>;
  }
}

export default TopNewsList;
