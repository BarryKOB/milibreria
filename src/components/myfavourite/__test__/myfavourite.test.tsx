// src/components/myfavourite/__test__/myfavourite.test.tsx
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyFavourite from '../myfavourite';

describe('MyFavourite component', () => {
  it('debería renderizarse correctamente', () => {
    render(<MyFavourite iconColor="red" />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });
});
