import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
//screen is some kind of virtual dom that is rendered for testing

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //The three A's
    //Arrange: Set up the test data, test conditions and test environment
    render(<Greeting />);
    //Act: Run logic that should be tested(e.g execute a function)
    //Assert: Compare execution results with expected results
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    }); //true is the default, you shouldnt add it to find the exact words
    //Test passes with exact: false because Greeting has Hello World! rendered and Hello World by itself is not exactly Hello World!
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render Hi as a text", () => {
    render(<Greeting />);
    const hiElement = screen.getByText(/hi/i);
    expect(hiElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button WAS clicked", () => {
    //ARRANGE
    render(<Greeting />);
    //ACT -3 different ways of getting the button :o
    //const buttonElement = screen.getByRole('button');
    //const buttonElement = screen.getByText('Change Text!');
    const buttonElement = document.getElementById('myBtn');
    userEvent.click(buttonElement);
    //ASSERT
    const outputElement = screen.getByText("Changed!", { exact: false });
    
    expect(outputElement).toBeInTheDocument();
  });

  test('Does not render "good to see you" if the button WAS clicked', ()=>{
    render(<Greeting/>);

    const buttonElement = document.getElementById('myBtn');
    userEvent.click(buttonElement);
    //queryByText will return null if the element is not found
    const output = screen.queryByText('good to see you', {exact: false});
    expect(output).toBeNull();
  })
});
