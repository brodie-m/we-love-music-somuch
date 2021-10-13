import { render, screen } from '@testing-library/react';
import App from '../App';
import Fans from '../components/Fans';

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByTestId('branding');
  expect(linkElement.textContent).toBe("MF DOOMAboutAdd a comment");
});
test('renders form', ()=> {
  render(<Fans/>)
  
})