
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import './article.css'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function LabelBottomNavigation() {

  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 23,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  
  const { cantTotal } = useSelector(state=>state.menu)

  

  return (
    <BottomNavigation sx={{ width: 350 }}  value={value} onChange={handleChange} className='buttonnavigation rounded-3'>
     
      <BottomNavigationAction
        label="Recientes"
        value="recents"
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

      <StyledBadge badgeContent={cantTotal} color="secondary">

      <Link to={PATH.payment}>
      <BottomNavigationAction 
      label="Carrito" 
      value="ShoppingCartIcon" 
      icon={<ShoppingCartIcon />} 
      /> 
      </Link>

      </StyledBadge> 
      
      </BottomNavigation>
    
  );
}
