import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'




Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <title>Nextjs + Contentful Starter</title>
      <link  rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    <Link href="/blog">
      <a> Blog </a>
    </Link>
  </div>
)
