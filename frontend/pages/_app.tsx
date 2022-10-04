import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div>hohoho</div>
    </Layout>
  );
}

export default MyApp;
