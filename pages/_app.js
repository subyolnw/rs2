import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
