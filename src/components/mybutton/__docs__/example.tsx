// src/components/mybutton/__docs__/example.tsx
import React from 'react';
import MyButton, { MyButtonProps } from '../mybutton';

function Example(props: MyButtonProps) {
  return (
    <MyButton
      text={props.text}
      bgcolor={props.bgcolor}
      txtcolor={props.txtcolor}
      bordercolor={props.bordercolor}
      bordersize={props.bordersize}
      hoverTxtColor={props.hoverTxtColor}
      hoverBgColor={props.hoverBgColor}
      disabled={props.disabled}
      size={props.size}
      onClick={props.onClick}
    />
  );
}

export default Example;
