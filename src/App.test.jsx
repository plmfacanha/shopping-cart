import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ProductCard from "./components/ProductCard";
import App from "./App";

// describe("App", () => {
//   beforeEach(() => {
//     render(<App />);
//   });
// });

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
});
