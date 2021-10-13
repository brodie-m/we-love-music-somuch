import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Fans from '../components/Fans';
import {MemoryRouter} from 'react-router-dom'
test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByTestId('branding');
  expect(linkElement.textContent).toBe("MF DOOMAboutAdd a comment");
});
test('renders form', ()=> {
  render(<Fans/>)
  
})
test('back button works',(done) => {
  render(
    <MemoryRouter initialEntries={["/something","/home"]}>
      <App/>
    </MemoryRouter>
  );
  function handleClick() {
    screen
  } 
  const backButton = screen.getByTestId('back-button');
  fireEvent.click(backButton)
})
