// src/components/mybutton/__test__/mybutton.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyButton from '../mybutton';

describe('MyButton component', () => {
  it('debería renderizarse correctamente', () => {
    render(<MyButton text="Haz click" txtcolor="white" bgcolor="blue" bordercolor="blue" bordersize="2px" hoverTxtColor="black" hoverBgColor="yellow" />);
    const button = screen.getByText(/Haz click/i);
    expect(button).toBeInTheDocument();
  });
});

