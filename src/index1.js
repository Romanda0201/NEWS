import React, {useState, useEffect} from 'react';
import {styled, useTheme, Drawer, Box, Button, Container, Card, CardContent, CardMedia, Typography, CardActionArea, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const toDetial = function(url) {
    window.location.href = "https://www.google.com.tw/?hl=zh_TW";
}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
      const theme = useTheme();
      const [open, setOpen] = React.useState(false);
    
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    

  return (
    /*<React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
          <Card sx={{ maxWidth: 600 }} onClick={toDetial}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.cnn.com/cnnnext/dam/assets/170606120957-california---travel-destination---shutterstock-220315747.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Container>
    </React.Fragment>*/


<div>
<Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                NEWS TODAY
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {['COVID-19'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['??????', '??????', '??????'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Container maxWidth="sm">
            
        <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        
            <List sx={{border: 1, borderRadius: 10, borderColor: 'primary.main'}}>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://www.chinatimes.com/realtimenews/20211203000653-260408">
                <ListItemText primary="Omicron???????????????????????? ??????2???????????????????????????????????????" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://udn.com/news/story/6809/5934611">
                <ListItemText primary="??????????????????????????? ???????????????????????????????????????????????????" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://udn.com/news/story/122190/5935357">
                <ListItemText primary="???????????????????????????????????? ?????????1????????????????????????" />
                </ListItemButton>
            </ListItem>
            </List>
        
        </Box>
        <br/>
        <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        
            <List sx={{border: 1, borderRadius: 10, borderColor: 'lightgreen'}}>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://finance.ettoday.net/news/2137596">
                <ListItemText primary="?????????iPhone?????????????????????6s???????????????????????????????????????" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://udn.com/news/story/6809/5934611">
                <ListItemText primary="??????????????????????????? ???????????????????????????????????????????????????" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://ec.ltn.com.tw/article/breakingnews/3756769">
                <ListItemText primary="?????????CEO????????????????????????????????? ???????????????2????????????" />
                </ListItemButton>
            </ListItem>
            </List>
        
        </Box>
        <br/>
        <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper'}}>
        
            <List sx={{border: 1, borderRadius: 10, borderColor: 'red'}}>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://www.ithome.com.tw/news/148174">
                <ListItemText primary="??????????????????Windows 11????????????Chrome" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://m.eprice.com.tw/smartos/talk/124/5692160/1/">
                <ListItemText primary="Google ??????????????? Android ?????????????????????????????????" />
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton component="a" href="https://game.ettoday.net/article/2137311.htm">
                <ListItemText primary="????????????????????????????????????17????????????????????????????????????Bug???RTA??????" />
                </ListItemButton>
            </ListItem>
            </List>
        
        </Box>

    </Container>
          </Main>
        </Box>

    
    </div>
  );
}
