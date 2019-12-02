import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from './Divider'
import MyPhoto from './MyPhoto'
import aboutMe from '../data/AboutMe'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles({
  aboutMe: {
    paddingTop: '90px',
    paddingBottom: '90px',
    position: 'relative',
  },
  marginTops:{
    marginTop: '50px'
  },
  // row:{
  //   marginTop: '50px',
  //   display: 'flex',
  //   padding: '0 24px',
  //   justifyContent: 'space-around',
  //   alignItems: 'center'
  // },
  // left:{
  //   width: '40%'
  // }
})

export default function AboutMe() {
  const classes = useStyles()

  function aboutMeText(){
    return aboutMe.map((p, i) => (
      <Grid item sm="12">
        <Typography paragraph gutterBottom={true} key={i} variant="body1">
          {p}
        </Typography>
      </Grid>
    ))
  }
  return (
    <Container className={classes.aboutMe} maxWidth='lg'>
      <Typography id="about-me" variant="h4" align='center'>
        About Me
      </Typography>
      <Divider />
      <Grid className={classes.marginTops} container spacing="3">
        <Grid item align="center" xs="12" md="6">
          <MyPhoto/>
        </Grid>
        <Grid item md="6">
          {aboutMeText()}
        </Grid>
      </Grid>
        
    </Container>
  )
}
