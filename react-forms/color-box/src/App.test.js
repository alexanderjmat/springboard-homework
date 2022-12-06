import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {app} = render(<App />);
  const header = screen.getByText("Fun with Boxes!");
  expect(header).toBeInTheDocument();
});
