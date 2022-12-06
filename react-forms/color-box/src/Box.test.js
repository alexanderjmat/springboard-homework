import { render, screen } from '@testing-library/react';
import Box from './Box'

test('renders learn react link', () => {
  render(<Box />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});