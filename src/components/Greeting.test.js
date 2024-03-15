import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Grreting Component', () => {
  test('render hello world', () => {
    //Arrange
    render(<Greeting />);
    //act
    const hellowrilsEle = screen.getByText('Hello world!');
    expect(hellowrilsEle).toBeInTheDocument();

    //assert
  });

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);
    //act
    const outputElem = screen.getByText('good to see you', { exact: false });
    expect(outputElem).toBeInTheDocument();
  });

  test('render changed when button was clicked', () => {
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const outputElem = screen.getByText('changed!');
    expect(outputElem).not.toBeInTheDocument();
  });
});
