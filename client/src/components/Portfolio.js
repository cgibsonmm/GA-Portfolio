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
import projects from '../data/projects'

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

  return (
    <div className={classes.portfolio}>
      <Container maxWidth="lg">
        <Typography id="portfolio" align="center" variant="h4">
          Portfolio
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
