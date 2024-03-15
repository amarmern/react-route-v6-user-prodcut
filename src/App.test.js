import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //arrange
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //assert
  expect(linkElement).toBeInTheDocument();
});
