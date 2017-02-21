import React, { Component } from 'react'


import Header from '../components/header'

import { initClient, getClient } from '../services/contentfulClient'
import { loadPageContent } from '../services/contentStore'
import 'isomorphic-fetch'


class BlogPage extends Component {
  static async getInitialProps() {
    const client = await initClient(CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN)
    const content = await loadPageContent('pHomeA')
    return {
      content: content.value
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header /> 
        Howdy! Bloggger
      </div>
    )
  }
}



export default BlogPage

