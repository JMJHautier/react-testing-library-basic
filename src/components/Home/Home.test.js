import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

// This testing file uses React Testing Library
// Learn more about RTL vs Enzyme here: https://medium.com/wesionary-team/react-testing-library-vs-enzyme-afd29db380ac#:~:text=In%20React%20Testing%20Library%2C%20we%20test%20using%20the%20DOM.,the%20component%20we%20are%20testing.

test('Renders welcome text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/this is my home component/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders user area when isUser is true', () => {
  render(<Home isUser />);
  const userArea = screen.getByText(/user is logged in/i);
  expect(userArea).toBeInTheDocument();
});

test('Background is green when user is logged in', () => {
  render(<Home isUser />);
  const mainHomeDiv = screen.getByTestId('home-div');
  expect(mainHomeDiv).toHaveStyle('background-color: blue');
});

test('Welcome text toggles when clicked', () => {
  render(<Home />);
  userEvent.click(screen.getByTestId('welcome-div', 'Click'));
  const welcomeDiv = screen.getByText(/alternate text/i);
  expect(welcomeDiv).toBeInTheDocument();
});
