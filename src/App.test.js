import { render, screen } from '@testing-library/react';
import App from './App';

test('stories', () => {
  render(<App />);
  const linkElement = screen.getByText(/stories/i);
  expect(linkElement).toBeInTheDocument();
});
