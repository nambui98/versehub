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

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title"              
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "Cow it up" : "VerseHub"} />
        <meta property="twitter:description"        
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ?
         "We bring you an IQ-boosting game. Try playing Cow it up - a tile-matching game to know what it feels like to break the limit that no one has been able to overcome RIGHT NOW!" : "We bring blockchain technology into individual lives and businesses"} />
        <meta property="twitter:image"              
        content={(pathname === '/cowItUp' || pathname === '/cowItUp-policy') ? "assets/thumb_ciu.png" : "assets/tw_image.png"} />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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
