import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/utils/theme';
import createEmotionCache from '@/utils/emotion';
import '../styles/global.css';
import NextNProgress from 'nextjs-progressbar';
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
        <meta property="og:url" content="https://versehub.io/" />
        <meta property="og:title" content="VerseHub" />
        <meta property="og:description" content="We bring blockchain technology into individual lives and businesses" />
        <meta property="og:image" content="/assets/og_image.png" />

        
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title"              
        content="VerseHub" />
        <meta property="twitter:description"        
        content="We bring blockchain technology into individual lives and businesses" />
        <meta property="twitter:image"              
        content="assets/tw_image.png" />


        <link rel="icon" href="/assets/versehub_favicon.png" />
        <link rel="apple-touch-icon" href="/assets/versehub_favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
				<NextNProgress color="#aa00ac"/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
