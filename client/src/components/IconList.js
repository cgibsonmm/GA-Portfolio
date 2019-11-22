import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconCard from './IconCard'

const useStyles = makeStyles({
  marginT: {
    marginTop: '50px'
  }
})

export default function IconList() {
  const classes = useStyles()
  const progs = [
    'icon-ruby-on-rails',
    'icon-d3',
    'icon-reactjs',
    'icon-css3',
    'icon-html5',
    'icon-javascript',
    'icon-ruby',
    'icon-sass',
    'icon-mysql',
    'icon-postgres'
  ]
  return (
    <Grid className={classes.marginT} container spacing={4}>
      {progs.map(item => (
        <Grid item xs={12} sm={6} md={4}>
          <IconCard icon={item}/>
        </Grid>
      ))}
    </Grid >
  )
}
