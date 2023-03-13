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
        render(<Greeting/>);
        const hiElement = screen.getByText(/hi/i);
        expect(hiElement).toBeInTheDocument();
    })
});
