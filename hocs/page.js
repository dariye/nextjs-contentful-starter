import React, { Component } from 'react'

export default (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx
      const isServer = !!req
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

      let pageProps = {}
      if(WrappedComponent.getInitialProps) {
        pageProps = await WrappedComponent.getInitialProps(ctx);
      }

      return {
        ...pageProps,
        isServer,
        userAgent
      }
    }

    constructor(props) {
      super(props) 
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};


