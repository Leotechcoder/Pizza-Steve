import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './article.css'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 450 }} value={value} onChange={handleChange} className='w-75 rounded-3'>
     
      <BottomNavigationAction
        label="Recientes"
        value="recents"
        
        className=''
        icon={<RestoreIcon />}
      />
     
      <BottomNavigationAction
        label="Favoritos"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Local"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Carrito" value="ShoppingCartIcon" icon={<ShoppingCartIcon />} />
    </BottomNavigation>
  );
}
