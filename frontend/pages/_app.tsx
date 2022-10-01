import type { AppProps } from 'next/app';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Map />
      <Footer />
    </>
  );
}

export default MyApp;
