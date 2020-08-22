import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        position:'relative',
    },
    image: {
        
        height: 'auto',
        width:'100%',
    },
    text: {
        position:'absolute',
        color:'white',
        textShadow: '2px 2px 4px #000000',
        top:'100px',
        left:'60px',
        fontSize:'48px'
    },
    subtext: {
        position:'absolute',
        color:'white',
        textShadow: '2px 2px 4px #000000',
        top:'190px',
        left:'60px',
        fontSize:'14px'
    },
    button:{
        position:'absolute',
        display:'inline',
        margin:'0 20px',
        top:'250px',
        left:'90px',
      },
}));




export const Home = () => {


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.text} >Shoe Store</h2>
            <h2 className={classes.subtext} >By Hamza Ali</h2>
            <img className={classes.image} src="https://img.wallpapersafari.com/desktop/1920/1080/5/4/3KswiU.jpg" alt="shoeimage" />
            <Link to={`/Products/`} style={{textDecoration:'none'}}>
                <Button className={classes.button} variant="contained" color="secondary">
                 Shop Now
                 </Button>
            </Link>
        </div>
    )
}
