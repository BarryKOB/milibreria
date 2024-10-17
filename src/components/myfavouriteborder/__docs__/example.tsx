// src/components/myfavouriteborder/__docs__/example.tsx
import React from 'react';
import MyFavouriteBorder, { MyFavouriteBorderProps } from '../myfavouriteborder';

function Example(props: MyFavouriteBorderProps) {
  return (
    <MyFavouriteBorder
      iconColor={props.iconColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
