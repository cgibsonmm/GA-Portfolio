import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from './Divider'
import Container from '@material-ui/core/Container'
import IconList from './IconList'

const useStyles = makeStyles({
  prog:{
    paddingTop: '90px',
    paddingBottom: '90px',
    position: 'relative',
    background: '#f4f4f4'
  }
})

export default function Prog() {
  const classes = useStyles()
  return (
    <div className={classes.prog}>
      <Container>
        <Typography align="center" variant="h4">
          Professional Skills
        </Typography>
        <Divider/>
        <IconList/>
      </Container>
    </div>
  )
}
