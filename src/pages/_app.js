
import "bootstrap/dist/css/bootstrap.css";
import "typeface-inter";
import Layout from './layout.jsx'
import "../js/custom"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
