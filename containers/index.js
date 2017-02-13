import React, { Component } from 'react'
import { initClient, getClient } from '../services/contentfulClient'
import { loadPageContent } from '../services/contentStore'
import 'isomorphic-fetch'


class IndexPage extends Component {
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
        { console.log(this.props.content) }
        Howdy!
        { TEST_ENV_VAR }
        <br />
        { CONTENTFUL_SPACE_ID }
        <br />
        {CONTENTFUL_ACCESS_TOKEN }
        
      </div>
    )
  }
}



export default IndexPage

