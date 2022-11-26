// import '../styles/globals.css';
import Layout from '../components/Layout';
import Providers from '../context/Providers';
import Global from '../styles/globals.js';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Global />
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
