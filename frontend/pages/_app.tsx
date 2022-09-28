import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1> Hello world!</h1>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
