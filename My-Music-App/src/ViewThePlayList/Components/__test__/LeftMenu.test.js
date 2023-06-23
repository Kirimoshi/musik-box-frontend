import React from 'react';
import { render, screen } from '@testing-library/react';
import LeftMenu from '../LeftMenu';

describe('LeftMenu component', () => {
  test('renders the left menu with correct content', () => {
    render(<LeftMenu />);
    
    const musicBoxLogo = screen.getByText(/Music Box/i);
    expect(musicBoxLogo).toBeInTheDocument();

    const accountEmail = screen.getByText(/user1epam.com/i);
    expect(accountEmail).toBeInTheDocument();

    const aboutTheAppText = screen.getByText(/About the app/i);
    expect(aboutTheAppText).toBeInTheDocument();

    const aboutUsText = screen.getByText(/About us/i);
    expect(aboutUsText).toBeInTheDocument();

    const logOutText = screen.getByText(/Log out/i);
    expect(logOutText).toBeInTheDocument();
  });
});
