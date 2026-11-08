import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
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

  it("checks if badge displays the Sheet when an user clicks in the badge", async () => {
    // arrange
    // 1. render App.jsx
    render(<App />);
    // 2. create a user event
    const user = userEvent.setup();
    // 3. find the badge ("cart" icon) the user clicks on
    const cartBtn = screen.getByRole("button", { name: "Cart0" });
    // 4. the Sheet is not on the page before the click
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // act
    await user.click(cartBtn);

    // assert
    // 5. find the Sheet container that is displayed after the click
    const sheet = await screen.findByRole("dialog");
    expect(sheet).toBeVisible();
    expect(screen.getByText("Your cart")).toBeInTheDocument();
  });
});
