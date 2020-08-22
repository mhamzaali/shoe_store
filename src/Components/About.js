import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #88d498 35%, #b2dbbf 70%)',
      height:'100%',
      paddingTop:'300px',
      paddingBottom:'300px'

    },
    title: {
        textAlign:'center',
        paddingTop:'50px',
        paddingBottom:'50px',
        marginBottom:'20px',
        color:'white',
        textShadow: '2px 2px 4px #000000',
        fontFamily:'Century Gothic',
        fontWeight:'bold',
        background: '#0000004b',
      },

      Card:{
          color: 'black',
          background: 'linear-gradient(90deg, #c52233 30%, #580c1f 90%)',
        '&:hover': {
            background: 'linear-gradient(45deg, #1c2541 30%, #b2f7ef 90%)',
            color:'black',
         },
      },


  }));



const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.Card}>
            <Typography variant="h4" className={classes.title}>
            Made By Hamza Ali
            </Typography>
            </Paper>
        </div>
    )
}

export default About
