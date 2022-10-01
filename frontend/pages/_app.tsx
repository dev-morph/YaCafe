import type { AppProps } from 'next/app';
import Map from './Map';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Map />
    </div>
  );
}

export default MyApp;
