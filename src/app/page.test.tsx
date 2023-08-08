import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Main Page', () => {
  it('renders a main page', () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });
});
