// This is the test file for the Button component. We will write unit tests for the Button component using Vitest and React Testing Library.

// TDD - Test Driven Development
// 1. Write a failing test
// 2. Write the minimum code to make the test pass
// 3. Refactor the code if necessary
// 4. Repeat

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "../components/Button";

// render - allows us to render the component in a virtual DOM for testing purposes
// screen - provides access to the rendered DOM elements for querying and assertions
// fireEvent - allows us to simulate user interactions like clicks, typing, etc.

// describe - is a function that groups related tests together. It takes a string description and a callback function that contains the tests.
describe('Button component', () => {
  // add test cases here
  // it - is a function that defines an individual test case. It takes a string description and a callback function that contains the test logic.
  it('should render the button with the correct label', () => {
      // Arrange - set up the test data and environment
      const label = "Click me";

      // Act - render the component
      render(<Button label="Click me" />);

      // Assert - check if the button is rendered with the correct label
      // const button = screen.getByText(label);
      // expect(button).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  })