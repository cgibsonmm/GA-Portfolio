import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles({
  image: {
    paddingTop: '56.25%'
  },
  modalImage: {
    width: '50%'
  },
  modal:{
    height: '100px',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default function ProjectCard({project}) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  function handleOpen(){
    setOpen(true)
  }

  function handleClose(){
    setOpen(false)
  }

  return (
    <Grid item sm={12} md={6}>
      <Card>
          <CardHeader
          title={project.title}
          subheader={project.tech.join(', ')}
        />
        <CardMedia
          image={project.image}
          className={classes.image}
        />
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <Paper>
            <img className={classes.modalImage} src={`${project.image}`} />
          </Paper>
        </Modal>
        <Button onClick={handleOpen}>Open Modal</Button>
      </Card>
    </Grid>
  )
}
