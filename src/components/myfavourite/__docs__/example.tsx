// src/components/myfavourite/__docs__/example.tsx
import React from 'react';
import MyFavourite, { MyFavouriteProps } from '../myfavourite';

function Example(props: MyFavouriteProps) {
  return (
    <MyFavourite
      iconColor={props.iconColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
