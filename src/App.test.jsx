import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import ProductCard from "./components/ProductCard";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the shop heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("FucaSurf Shop");
  });

  it("check if add to cart button was clicked", async () => {
    // TODO: arrange, act, assert (AAA) for a button
    // 0. mock function passed to the component that will be rendered
    const onAdd = vi.fn();
    // 1. render button
    render(<ProductCard onAdd={onAdd} />);
    // 2. create a mock user
    const user = userEvent.setup();
    // 3. fake an event
    // 3.1 grab one of the buttons
    const button = screen.getAllByRole("button", { name: /add to cart/i });
    await user.click(button);
    // 4. confirm that it was returned
    expect(button).toHaveBeenCalled();
  });
});
