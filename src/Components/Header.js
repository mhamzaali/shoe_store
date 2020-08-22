import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0.03,
  },
  cart: {
    position: 'absolute',
    right: '5%',
  },
  HyperLink: {
    fontSize: '14px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: 'black',
    },
  },

}));


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Bar} >
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.HyperLink} to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.HyperLink} to="Products">Products</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.HyperLink} to="About">About</Link>
          </Typography>
          <IconButton aria-label="cart" className={classes.cart} >
            <StyledBadge badgeContent={4} color="secondary" >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
