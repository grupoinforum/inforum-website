// pages/_app.js
import Head from 'next/head';
import './style.css';

import { GlobalProvider } from '../global-context';
import { NextIntlProvider } from 'next-intl';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Aquí va el viewport (¡ya no en _document.js!) */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NextIntlProvider messages={pageProps?.messages}>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </NextIntlProvider>
    </>
  );
}
