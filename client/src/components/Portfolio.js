import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from './Divider';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Map from '../images/map.png'

const useStyles = makeStyles({
  portfolio:{
    paddingTop: '90px',
    paddingBottom: '90px',
    position: 'relative'
  },
  margin:{
    marginTop: '50px',
  },
  image: {
    paddingTop: '56.25%'
  }
})

export default function Portfolio() {
  const classes = useStyles()

  const projects = [{
    title: 'AIRadar',
    tech: ['D3.js', 'HTML5', 'CSS3', 'AXIOS'],
    description: 'D3.js and OpenSky-Api come together to display a live flight tracking map of the United States and all the flights over the country.',
    image: Map
  }]
  return (
    <div className={classes.portfolio}>
      <Container maxWidth="lg">
        <Typography id="portfolio" align="center" variant="h4">
          PortFolio
        </Typography>
        <Divider/>
          <Grid container className={classes.margin} spacing={3}>
          {projects.map(project => (
            <Grid item sm={6} md={4}>
            <Card>
              <CardHeader
                title={project.title}
                subheader={project.tech.join(', ')}
              />
              <CardMedia
                image={project.image}
                className={classes.image}
              />
            </Card>
            </Grid>
          ))}
          </Grid>
      </Container>
    </div>
  )
}
