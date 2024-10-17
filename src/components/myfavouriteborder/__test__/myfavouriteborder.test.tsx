// src/components/myfavouriteborder/__test__/myfavouriteborder.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyFavouriteBorder from '../myfavouriteborder';

describe('MyFavouriteBorder component', () => {
  it('debería renderizarse correctamente', () => {
    render(<MyFavouriteBorder iconColor="blue" />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });
});
