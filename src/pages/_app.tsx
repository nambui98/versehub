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
import { useRouter } from 'next/router';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {pathname} = useRouter()

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? 'Cow it up' : 'VerseHub'}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:url" content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? `https://versehub.io${pathname}` : "https://versehub.io/"} />
        <meta property="og:title" content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "Cow it up" : "VerseHub"} />
        <meta property="og:description" content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ?
         "We bring you an IQ-boosting game. Try playing Cow it up - a tile-matching game to know what it feels like to break the limit that no one has been able to overcome RIGHT NOW!" : 
         "We bring blockchain technology into individual lives and businesses"} />
        <meta property="og:image" content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "/assets/thumb_ciu.png" : "/assets/og_image.png"} />

        
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title"              
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "Cow it up" : "VerseHub"} />
        <meta property="twitter:description"        
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ?
         "We bring you an IQ-boosting game. Try playing Cow it up - a tile-matching game to know what it feels like to break the limit that no one has been able to overcome RIGHT NOW!" : "We bring blockchain technology into individual lives and businesses"} />
        <meta property="twitter:image"              
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "assets/thumb_ciu.png" : "assets/tw_image.png"} />


        <link rel="icon" href={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "/assets/ciu_favicon.png" : "/assets/versehub_favicon.png"} />
        <link rel="apple-touch-icon" href={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "/assets/ciu_favicon.png" : "/assets/versehub_favicon.png"} />
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
