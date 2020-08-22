import React from 'react';
import Shoes from './../Shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign:'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '323px',
        height: '400px',
        margin: '0 auto',
        background: 'linear-gradient(45deg, #b8f2e6 30%, #b2dbbf 90%)',
      },

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
      Link:{
        fontSize:'14px',
        textDecoration: 'none',
        color: 'black',
      },
      Card:{
          color: 'black',
        '&:hover': {
            background: 'linear-gradient(45deg, #ff8c61 30%, #48bfe3 90%)',
            color:'black',
            '& img':{
              transform:'rotate(-25deg) scale(1.13)',
              transition: 'width 1s, height 1s, transform 0.6s',
             },
             '& h2':{
              color:'white',
              textShadow: '1px 1px 5px #000000',
             },
         },

      },
      image:{
          height:'300px',
          borderRadius: '50%',
      },
      Background:{
        background: 'linear-gradient(90deg, #c52233 30%, #580c1f 90%)',
      },

  }));

export const Products = () => {

    const classes = useStyles();

    return (
        <div className={classes.Background}>
            <Typography variant="h2" className={classes.title}>
            Products
            </Typography>
            <div className={classes.root}>
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return(
                        <Paper elevation={3} className={classes.Card}>
                        <Link key="keyname" to={`/Products/${keyName}`} className={classes.Link}>
                            <h2>{shoe.name}</h2>
                            <img src={shoe.img} alt="Shoe" className={classes.image} />
                        </Link>
                        </Paper>
                    )
                })}
            </div>
        </div>
    )
}
