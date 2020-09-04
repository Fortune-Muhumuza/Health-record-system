import React, { component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            HMS
          </Typography>
          <Button color='inherit'>
          <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
            Sign in
          </Link></Button>
          <Button>
          <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
            Register
          </Link>
          </Button>
          <Button>
          <Link to='/homePage' style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

//  const Navbar = () => {

//     return (
//       <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
//         <Link to='/' className='navbar-brand'>
//           Customer List
//         </Link>
//         <div className='collapse navbar-collapse'>
//           <ul className='navbar-nav mr-auto'>
//             <li className='navbar-item'>
//               <Link to='/' className='nav-link'>
//                 Customers
//               </Link>
//             </li>
//             <li className='navbar-item'>
//               <Link to='/create' className='nav-link'>
//                 Create Customer Log
//               </Link>
//             </li>
//             <li className='navbar-item'>
//               <Link to='/user' className='nav-link'>
//                 Create User
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );

// }

// export default Navbar;
