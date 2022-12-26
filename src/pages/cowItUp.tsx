import { Box, Link, styled, useMediaQuery } from "@mui/material"
import { NextPage } from "next"

const CowItUpPage: NextPage = () => {
  const width767 = useMediaQuery('(max-width: 767px)')
  return <Wrap>
    <Logo><img src="/assets/ciu/logo_ciu.png" /><CowLogo><img src={`/assets/ciu/${width767 ? 'icon_ciu_2' : 'icon_ciu_3'}.png`} /></CowLogo></Logo>
    <Inner>
      <BoxButton>
        <Link href="#" style={{
          marginRight: width767 ? '14px' : '32px',
        }}><img src="/assets/ciu/AppStore.png" /></Link>
        <Link href="#"><img src="/assets/ciu/PlayStore.png" /></Link>
      </BoxButton>
      <BoxBody>
        <BodyLeft>
          Hey genius, ready to higher the IQ of the whole street? Try playing Cow it up - tile-matching game to know what it feels like to break the limit that no one has been able to overcome RIGHT NOW!<br></br><br></br>
          {!width767 && <Box>
            To start the tile-matching game is very easy. Your job is to eliminate all the patterns on the screen by adding them to the grid below.<br></br><br></br>
            However, winning the match 3 game is nearly equal to asking for the moon! How so?
          </Box>}
          {!width767 && <Box sx={{
            width: 182,
            marginLeft: '30px',
            '& img': {
              width: '100%'
            }
          }}><img src="/assets/ciu/icon_ciu_1.png" /></Box>}
        </BodyLeft>
        <BodyRight>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QKxb_IJ1xqY?&autoplay=1&controls=0&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          {!width767 && <Box sx={{
            textAlign: 'right',
            marginRight: '20px',
            marginTop: '-20px'
          }}><img src="/assets/ciu/icon_ciu_4.png" /></Box>}
        </BodyRight>
        {width767 && <Box>
          To start the tile-matching game is very easy. Your job is to eliminate all the patterns on the screen by adding them to the grid below.<br></br><br></br>
          However, winning the match 3 game is nearly equal to asking for the moon! How so?
        </Box>}
        {width767 && <Box sx={{
            textAlign: 'center',
            '& img': {
              width: '109px'
            }
          }}><img src="/assets/ciu/icon_ciu_1.png" /></Box>}
      </BoxBody>
      <BoxFooter>
        <Box sx={{
          marginRight: '24px'
        }}><img src="/assets/ciu/logo_versehub.png" /></Box>
        <BoxPolicy>
          Developed by Versehub INC<br></br>
          <Link href="/cowItUp-policy">Privacy Policy</Link>
        </BoxPolicy>
      </BoxFooter>
    </Inner>
  </Wrap>
}

export default CowItUpPage

const Wrap = styled(Box)({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: 'url(/assets/ciu/background_ciu.png)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
})
const Logo = styled(Box)({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  paddingTop: 24,
  marginBottom: 24,
  '& img': {
    maxWidth: 212,
    '@media (min-width: 768px)': {
      maxWidth: 344
    }
  },
  '@media (min-width: 768px)': {
    paddingTop: 40,
    marginBottom: 64,
  }
})
const CowLogo = styled(Box)({
  position: 'absolute',
  left: 'calc(100% - 15px)',
  bottom: -50,
  '@media (max-width: 767px)': {
    '& img': {
      maxWidth: 110
    },
    left: 'calc(100% - 35px)',
    top: 4,
  }
})
const BoxBody = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: 42,
  textAlign: 'left',
  fontSize: 18,
  fontWeight: '400',
  color: '#151515',
  letterSpacing: '0.04em',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    fontSize: 20,
  }
})
const Inner = styled(Box)({
  maxWidth: 800,
  margin: 'auto',
  fontFamily: 'Aldo the Apache',
  padding: '0 15px',
  '@media (min-width: 1280px)': {
    maxWidth: 1150
  }
})
const BodyLeft = styled(Box)({
  textAlign: 'left',
  '@media (min-width: 768px)': {
    maxWidth: 'calc(50% - 16px)',
  }
})
const BodyRight = styled(Box)({
  marginBottom: 16,
  '& iframe': {
    width: '100%',
    height: 307,
    border: 0,
    borderRadius: 12
  },
  '@media (min-width: 768px)': {
    width: 'calc(50% - 16px)',
    marginBottom: 0
  }
})
const BoxButton = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 40,
  '& img': {
    maxWidth: 320,
    width: '100%',
    cursor: 'pointer'
  }
})
const BoxFooter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 27
})
const BoxPolicy = styled(Box)({
  fontSize: 24,
  fontWeight: '400',
  color: '#151515',
  textAlign: 'left',
  '& a': {
    color: '#151515',
    textDecoration: 'underline',
  }
})