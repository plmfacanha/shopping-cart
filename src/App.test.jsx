import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ProductCard from "./components/ProductCard";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it.todo("check if fetching the API is working properly");
});

describe("ProductCard", () => {
  it("check if add to cart button was clicked", async () => {
    // TODO: arrange, act, assert (AAA) for a button element
    // 0. mock function passed to the component that will be rendered
    const onAdd = vi.fn();
    // 1. render button
    render(<ProductCard onAdd={onAdd} />);
    // 2. create a mock user
    const user = userEvent.setup();
    // 3. select one of the buttons component/element
    const button = screen
      .getAllByRole("button", { name: /add to cart/i })
      .at(0);
    // 4. fake an event
    await user.click(button);
    // 5. confirm that it was returned
    expect(onAdd).toHaveBeenCalled();
  });
});
