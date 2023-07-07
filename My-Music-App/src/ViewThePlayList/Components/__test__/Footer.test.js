import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders the footer with correct content', () => {
    render(<Footer />);
    
    const copyRightText = screen.getByText(/2023 Music Box/i);
    expect(copyRightText).toBeInTheDocument();

    const rightsReservedText = screen.getByText(/All Rights Reserved/i);
    expect(rightsReservedText).toBeInTheDocument();
  });
});
