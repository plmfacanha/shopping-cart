import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  render(<App />);
  it("renders the shop heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("FucaSurf Shop");
  });

  it("checks click when adding items to the cart", () => {
    const onClick = vi.fn();
    userEvent.click(screen.getAllByRole("button", { name: /Add to cart/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
