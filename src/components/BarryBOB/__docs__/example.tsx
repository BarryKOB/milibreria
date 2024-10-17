// example.tsx
import React from 'react';
import BarryBOB, { BarryBOBProps } from '../BarryBOB';

// Creamos un componente Example para renderizar BarryBOB con las props que le pasamos
function Example(props: BarryBOBProps) {
  return (
    <BarryBOB
      title={props.title}
      description={props.description}
      avatar={props.avatar}
    />
  );
}

export default Example;

