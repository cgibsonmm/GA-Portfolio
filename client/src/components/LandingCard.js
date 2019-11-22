import React, { useState, useEffect } from 'react'
import posed from 'react-pose'
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Background from '../images/background.jpg'


const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
   }
})

const useStyles = makeStyles({
  sliderBg:{
    height: '700px',
    background: `url(${Background}) no-repeat center center`,
    backgroundSize: 'cover',
  },
  filter:{
    background: 'rgba(0, 0, 0, 0.75)',
    height: '100%',
    width: '100%'
  },
  textBox:{
    padding: '0 24px',
  },
  textMargin:{
    marginBottom: '20px'
  },
  gray:{
    color: '#dddddd'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  }
})

export default function LandingCard() {
  const classes = useStyles()
  const [hidden, setHidden] = useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      setHidden(false)
    }, 500)
  }, [])

  return (
    <div id="main" className={classes.sliderBg}>
      <div className={classes.filter}>
      <Container maxWidth='lg' className={classes.flex}>
        <Box pose={hidden ? 'hidden' : 'visible'} className={classes.textBox}>
          <Typography className={[classes.textMargin, classes.gray]} variant="h5" >
            Hello, I'm
          </Typography>
          <Typography className={classes.textMargin} variant="h3" color="primary">
            Corey Gibson
          </Typography>
          <Typography className={[classes.gray]} variant="h2" fontWeight="fontWeightBold">
            Full Stack Software Engineer
          </Typography>
        </Box>
      </Container>
      </div>
    </div>
  )
}
