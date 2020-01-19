import axios from 'axios'

import Layout from '@components/Layout'

axios.defaults.baseURL = process.env.API_URL

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
