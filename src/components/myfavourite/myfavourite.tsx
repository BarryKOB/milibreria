import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {
  iconColor: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavourite(props: MyFavouriteProps) {
  const { iconColor, disabled, onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{ color: iconColor }} 
    >
      <FavoriteIcon />
    </IconButton>
  );
}

export default MyFavourite;


