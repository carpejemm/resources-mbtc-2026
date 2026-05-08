import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"
import Counter from "../components/Counter"

describe('Counter component', () => {
  // add test cases here
  // Test case 1: should render the Counter component with initial count of 0
  it('should render the Counter component with initial count of 0', () => {
    // Arrange - set up the test data and environment
    render(<Counter />)

    // Act - get the count element
    // Why do we need to use /Count:/i instead of just "Count: 0"?
    // Because the count value is dynamic and can change when we click the buttons. Using a regex allows us to match the text regardless of the count value.
    const countElement = screen.getByText(/Count:/i)
    
    // Assert - check if the count element is in the document
    expect(countElement).toBeInTheDocument()
    // Assert - check if the initial count value is 0
    expect(countElement).toHaveTextContent("Count: 0")
  })

  // Test case 2: should increment the count when the Increment button is clicked
  it('should increment the count when the Increment button is clicked', async () => {
    // Arrange - set up the test data and environment
    render(<Counter />)

    const button = await screen.findByRole("button", { name: /Increment/i })
    let counterValue = await screen.findByTestId('counter-value')

    expect(counterValue).toHaveTextContent("Count: 0")

    // Act - click the Increment button
    await userEvent.click(button)
    expect(counterValue).toHaveTextContent("Count: 1")

    // Act - click the Increment button again
    await userEvent.click(button)
    // Assert - check if the count value is incremented to 2
    expect(counterValue).toHaveTextContent("Count: 2")
  })

  // Test case 3: should decrement the count when the Decrement button is clicked
  it('should decrement the count when the Decrement button is clicked', async () => {
    // Arrange - set up the test data and environment
    render(<Counter />)

    const button = await screen.findByRole("button", { name: /Decrement/i })
    let counterValue = await screen.findByTestId('counter-value')

    expect(counterValue).toHaveTextContent("Count: 0")

    // Act - click the Decrement button
    await userEvent.click(button)
    expect(counterValue).toHaveTextContent("Count: -1")

    // Act - click the Decrement button again
    await userEvent.click(button)
    // Assert - check if the count value is decremented to -2
    expect(counterValue).toHaveTextContent("Count: -2")
  })
})