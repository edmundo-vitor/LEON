import type { AppProps } from 'next/app';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <div className="body">
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
