import App from 'next/app'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'

import Layout from '@modules/ui/components/Layout'
import configureStore from 'store/configureStore'

axios.defaults.baseURL = process.env.API_URL

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(configureStore)(MyApp)
