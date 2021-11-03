import type { AppProps } from 'next/app';
import '../../styles/globals.scss';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { isUser } from '../models/User';

function MyApp({ Component, pageProps }: AppProps) {

   return (
      <div className="body">
         <NavBar isUser={isUser}/>
         <Component {...pageProps} />
         <Footer />
      </div>
   );
}

export default MyApp;
