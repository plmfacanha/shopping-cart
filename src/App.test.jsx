import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { getByText } from "@testing-library/jest-dom";
import ProductCard from "./components/ProductCard";
import App from "./App";

describe("ProductCard", () => {
  it("check if add to cart button was clicked", async () => {
    const onAdd = vi.fn();

    render(<ProductCard onAdd={onAdd} />);

    const user = userEvent.setup();
    const button = screen
      .getAllByRole("button", { name: /add to cart/i })
      .at(0);

    await user.click(button);

    expect(onAdd).toHaveBeenCalled();
  });

  it("checks if badge updates when an item is added to the cart", async () => {
    // arrange
    // 1. render App.jsx
    const app = render(<App />);

    // act
    // 2. simple test to check for a badge string ("cart") in the document
    expect(getByText(/cart/i).toBeInTheDocument());
  });
});
