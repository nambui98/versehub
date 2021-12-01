import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/utils/theme';
import createEmotionCache from '@/utils/emotion';
import '../styles/global.css';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>VerseHub</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="author" content="VerseHub" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://versehub.io/" />
        <meta property="og:title" content="VerseHub" />
        <meta property="og:description" content="We bring blockchain technology into individual lives and businesses" />
        <meta property="og:image" content="/assets/missions/image2.png" />

        <link rel="icon" href="/assets/versehub_favicon.png" />
        <link rel="apple-touch-icon" href="/assets/versehub_favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
