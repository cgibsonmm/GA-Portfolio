import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from './Divider'
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  contact:{
    paddingTop: '90px',
    paddingBottom: '90px',
    position: 'relative',
    background: '#f4f4f4'
  },
  margin: {
    marginTop: '50px'
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '10px 50px',
  }
})

export default function Contact() {
  const classes = useStyles()
  return (
    <div className={classes.contact}>
      <Typography id="contact" align="center" variant="h4">
        Contact Me
      </Typography>
      <Divider/>
      <Container maxWidth="lg">
        <Grid className={classes.margin} container>
          <Grid className={classes.grid}  item xs="12">
              <MyLocationIcon color="primary"/>
              <Typography color="primary" variant="h6">
                Queens, NY
              </Typography>
            </Grid>
          <Grid item xs="12">
            <Link
              className={classes.grid}
              target="blank" 
              href="https://www.linkedin.com/in/corey-gibson/"
              >
                <LinkedInIcon/>
                <Typography variant="h6">
                  Corey-Gibson
                </Typography>
            </Link>
           </Grid>
           <Grid item xs="12">
            <Link 
              href="mailto:cgibsonmmdev@gmail.com"
              className={classes.grid}
              target="blank"
              >
              <EmailIcon />
              <Typography variant="h6">
                cgibsonmmdev@gmail.com
              </Typography>
            </Link>
            </Grid>
            <Grid item xs="12">
            <Link
              target="blank"
              href="tel:845-701-1472"
              className={classes.grid}>
              <PhoneIcon />
              <Typography variant="h6">
                (845) 701-1472
              </Typography>
            </Link>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}
