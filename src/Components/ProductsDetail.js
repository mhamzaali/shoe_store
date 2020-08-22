import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';
import { NotFound } from './NotFound';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        background: 'linear-gradient(45deg, #ff8c61 30%, #ff8c91 90%)',
        height: '100%',
        textAlign: 'center',
        overflowX: 'hidden',
        paddingBottom:'90px',
    },
    title: {
        textAlign: 'left',
        color: 'white',
        textShadow: '2px 2px 4px #000000',
        fontFamily: 'Century Gothic',
        fontSize:'32px'
    },
    description: {
        textAlign: 'left',
        paddingRight: '200px',
        fontFamily: 'lato',
    },
    image: {
        height: '400px',
        border: '1px solid black',
        '&:hover': {
            transform: 'scale(1.2)',
            transition: 'width 1s, height 1s, transform 0.5s',
        },
    },
    button:{
      display:'inline',
      margin:'0 20px',
    },
    btn:{
        marginTop:'50px',
        marginRight:'200px'
    }

}));
export const ProductsDetail = () => {

    const classes = useStyles();

    const { ProductID } = useParams();
    const shoe = Shoes[ProductID];
    if (!shoe)
        return (
            <NotFound />
        );

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img src={shoe.img} alt="Shoe" className={classes.image} />
                </Grid>
                <Grid item xs={6}>
                    <h2 className={classes.title} >{shoe.name}</h2>
                    <p className={classes.description}>Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className={classes.btn}>
                <Button className={classes.button} variant="contained" color="primary">
                    Add to Cart
                </Button>
                <Link to={`/Products/`} style={{textDecoration:'none'}}>
                <Button className={classes.button} variant="contained" color="secondary">
                  Go Back
                 </Button>
                 </Link>
                 </div>
                </Grid>
            </Grid>
        </div>

    )
}
