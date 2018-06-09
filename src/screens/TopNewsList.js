// @flow

import React, { Component } from 'react'

import { Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

import ArticleCard from '../components/ArticleCard'
import staticData from '../helpers/staticData.json'

class TopNewsList extends Component {
  constructor(props) {
    super(props)
    const { articles } = staticData
    this.state = { newsArticles: articles }
  }

  keyExtractor = (item, index) => item.title

  renderItem = ({ item }) => {
    return (
      <ArticleCard
        title={item.title}
        imageUri={item.urlToImage}
        subtitle={item.description}
        buttonText="See More"
      />
    )
  }

  render() {
    return (
      <FlatList
        data={this.state.newsArticles}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }
}

export default TopNewsList
