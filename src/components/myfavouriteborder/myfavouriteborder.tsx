// src/components/myfavouriteborder/myfavouriteborder.tsx
import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderProps {
  iconColor: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

function MyFavouriteBorder(props: MyFavouriteBorderProps) {
  const { iconColor, disabled, onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{ color: iconColor }}
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default MyFavouriteBorder;
