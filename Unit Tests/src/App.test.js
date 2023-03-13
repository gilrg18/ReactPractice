import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //checks if the text "learn react" is rendered in the App Component (/learn react/ is a regular expresion)
  //[npm test] to run tests
});
