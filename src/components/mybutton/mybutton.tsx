// src/components/mybutton/mybutton.tsx
import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

// Declaramos la interface para las props del componente
export interface MyButtonProps {
  text: string; 
  txtcolor: string; 
  bgcolor: string; 
  bordercolor: string; 
  bordersize: string; 
  size?: 'small' | 'medium' | 'large'; 
  hoverTxtColor: string; 
  hoverBgColor: string; 
  disabled?: boolean; 
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

// Definimos el componente MyButton
function MyButton(props: MyButtonProps) {
  // Extraemos las props
  const {
    text,
    txtcolor,
    bgcolor,
    bordercolor,
    bordersize,
    size = 'medium', 
    hoverTxtColor,
    hoverBgColor,
    disabled = false, 
    onClick,
  } = props;

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant="outlined"
      // Estilos personalizados con la propiedad sx de MUI
      sx={{
        color: txtcolor,
        backgroundColor: bgcolor,
        border: `${bordersize} solid ${bordercolor}`,
        ':hover': {
          backgroundColor: hoverBgColor,
          color: hoverTxtColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;

