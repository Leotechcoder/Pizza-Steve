import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import MailIcon from '@mui/icons-material/Mail';
import GroupsIcon from '@mui/icons-material/Groups';
import './drawer.css'
import './toggler.css'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH'

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250,}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inicio', 'Nosotros', 'Nuestra Carta'].map((text, index) => (
          <ListItem key={text} disablePadding>
            {
              text === 'Inicio'? 
                <Link className='links-drawer' to={PATH.inicio}>
                <ListItemButton>
                  <ListItemIcon>
                  {index === 0 ? <HomeIcon className='svg-drawer'/> : index === 1 ? <GroupsIcon className='svg-drawer' /> : <MailIcon className='svg-drawer' /> }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                </Link> : 
                          text === 'Nosotros'? 
                          <Link className='links-drawer' to={PATH.casa}>
                          <ListItemButton>
                            <ListItemIcon>
                            {index === 0 ? <HomeIcon className='svg-drawer'/> : index === 1 ? <GroupsIcon className='svg-drawer'/> : <MailIcon className='svg-drawer'/> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItemButton>
                          </Link> :
                                <Link className='links-drawer' to={PATH.carta}>
                                <ListItemButton>
                                  <ListItemIcon>
                                  {index === 0 ? <HomeIcon className='svg-drawer'/> : index === 1 ? <GroupsIcon className='svg-drawer'/> : <MailIcon className='svg-drawer'/> }
                                  </ListItemIcon>
                                  <ListItemText primary={text} />
                                </ListItemButton>
                                </Link>
          }
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Recientes', 'Favoritos', 'Ubicación'].map((text, index) => (
          <ListItem key={text} disablePadding>
            {
              text === 'Recientes'? 
                <Link className='links-drawer' to={PATH.carta}>
                <ListItemButton>
                  <ListItemIcon>
                  {index === 0 ? <RestoreIcon className='svg-drawer'/> : index === 1 ? <FavoriteIcon className='svg-drawer'/> : <LocationOnIcon className='svg-drawer'/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                </Link> : 
                          text === 'Favoritos'? 
                          <Link className='links-drawer' to={PATH.carta}>
                          <ListItemButton>
                            <ListItemIcon>
                            {index === 0 ? <RestoreIcon className='svg-drawer'/> : index === 1 ? <FavoriteIcon className='svg-drawer'/> : <LocationOnIcon className='svg-drawer'/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItemButton>
                          </Link> :
                                <Link className='links-drawer' to={PATH.carta}>
                                <ListItemButton>
                                  <ListItemIcon>
                                  {index === 0 ? <RestoreIcon className='svg-drawer'/> : index === 1 ? <FavoriteIcon className='svg-drawer'/> : <LocationOnIcon className='svg-drawer'/>}
                                  </ListItemIcon>
                                  <ListItemText primary={text} />
                                </ListItemButton>
                                </Link>
          }
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <Button className='navbar-toggler d-block d-lg-none' onClick={toggleDrawer(true)}><span className="navbar-toggler-icon togler-drawer"></span></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </nav>
  );
}