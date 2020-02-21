import React, { useState } from 'react';

import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Container, MenuLogo } from './styles';

import SidebarNav from './Components/SidebarNav';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundImage:
        'linear-gradient(45deg,#6E8190 0%, #596776 50%, #242931 100%)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    marginTop: 40,
  },

  drawerPaper: {
    width: drawerWidth,
    // background: 'pink', cor do menu lateral
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Header({ body }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    {
      title: 'Repositorios',
      href: '/repository',
      icon: <DashboardIcon />,
      isOpen: false,
      list: [
        {
          title: 'Cadastrar',
          href: '/repository',
          icon: <PeopleIcon />,
        },
        {
          title: 'Listar',
          href: '/user',
          icon: <PeopleIcon />,
        },
      ],
    },
    {
      title: 'Users',
      href: '/user',
      icon: <PeopleIcon />,
      list: [],
    },
    {
      title: 'Products',
      href: '/products',
      icon: <ShoppingBasketIcon />,
      list: [],
    },
    {
      title: 'Authentication',
      href: '/sign-in',
      icon: <LockOpenIcon />,
      list: [],
    },
  ];

  const drawer = (
    <div>
      <MenuLogo>
        <h4>LOGO</h4>
      </MenuLogo>
      <Divider />

      <SidebarNav className={classes.nav} pages={pages} />

      <Divider />
    </div>
  );

  return (
    <Container>
      <AppBar position="fixed" className={`${classes.appBar} navSuperior`}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {body}
      </main>
    </Container>
  );
}
