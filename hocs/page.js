import React, { Component } from 'react'

import { Provider } from 'react-redux'

import { initStore } from '../store'

export default (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      const store = initStore({}, isServer)
      let pageProps = {}
      if(WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps(ctx);
      }

      return {
        ...pageProps,
        initialState: store.getState(),
        isServer,
        userAgent
      }
    }

    constructor(props) {
      super(props) 
      this.store = initStore(props.initialState, props.isServer)
    }

    render() {
      return (
        <div>
          <Provider store={this.store}>
            <WrappedComponent {...this.props} />
          </Provider>
        </div>
      );
    }
  }
};

