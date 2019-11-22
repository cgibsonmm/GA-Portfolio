import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from './Divider';
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid'
import Map from '../images/map.png'
import Handoff from '../images/handoff.png'
import TheHub from '../images/thehub.png';

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
  },{
    title: 'TheHub',
    tech: ['React.js', 'HTML5', 'CSS3', 'Material-Ui', 'Axios'],
    description: 'Frontend React App built using Reddit Api, Youtube Api and a news api to hold in hopes to streamline your social media workflow.',
    image: TheHub
  },{
    title: 'HandOff',
    tech: ['React.js', 'Ruby on Rails', 'HTML5', 'CSS3', 'Axios', 'Devise', 'Postgresql'],
    image: Handoff
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
            <ProjectCard project={project}/>
          ))}
          </Grid>
      </Container>
    </div>
  )
}
