import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from './Divider'
import MyPhoto from './MyPhoto'


const useStyles = makeStyles({
  aboutMe: {
    paddingTop: '90px',
    paddingBottom: '90px',
    position: 'relative',
  },
  row:{
    marginTop: '50px',
    display: 'flex',
    padding: '0 24px',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  left:{
    width: '40%'
  }
})

export default function AboutMe() {
  const classes = useStyles()
  return (
    <Container className={classes.aboutMe} maxWidth='lg'>
      <Typography id="about-me" variant="h4" align='center'>
        About Me
      </Typography>
      <Divider />
      <div className={classes.row}>
        <Typography className={[classes.left, classes.margin]} variant="body1">
          A hard-working developer that takes pride in high-quality code built with an Agile workflow. I strive to utilize best practices such as TDD/BDD. Coming from eight-plus years in EMS I have a strong working knowledge of decision making, problem- solving in high-stress environments, and working as a team to accomplish a task or goal.
        </Typography>
        <div className="right">
          <MyPhoto/>
        </div>
      </div>
    </Container>
  )
}
