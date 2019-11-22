import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  underline:{
    backgroundColor: '#3a7cec',
    height: '3px',
    width: '16px',
    content: "''",
    position: 'absolute',
    left: '50%',
    top: '140px',
    "&::after":{
      background: '#999 none repeat scroll 0 0',
      bottom: 0,
      content: "''",
      height: '2px',
      left: '-30px',
      position: 'absolute',
      width: '25px',
    },
    "&::before": {
    background: '#999 none repeat scroll 0 0',
    bottom: 0,
    content: '""',
    height: '2px',
    position: 'absolute',
    right: '-30px',
    width: '25px',
    },
  },
})

export default function Divider() {
  const classes = useStyles()
  return (
    <span className={classes.underline}></span>
  )
}
