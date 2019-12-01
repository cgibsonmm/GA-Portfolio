import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography  from '@material-ui/core/Typography'
import Main from './../images/Headshot.png'

const useStyles = makeStyles({
  photo:{
    height: '300px',
    width: '300px',
    background: `url(${Main}) no-repeat center center`,
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: '3px solid gray'
  }
})

export default function MyPhoto() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.photo}>
      </div>
      <Typography align="center" variant='h6'>
        Corey Gibson
      </Typography>
    </>
  )
}
