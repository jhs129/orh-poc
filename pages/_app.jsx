import "@/styles/globals.css";
import '@/styles/fonts.css';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const locale = Cookies.get('locale') || 'en-US';
    if (!Cookies.get('locale')) {
      Cookies.set('locale', locale, { expires: 365 });
    }
  }, []);
  return <Component {...pageProps} />;
}
