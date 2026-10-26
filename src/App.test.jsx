import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the shop heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("FucaSurf Shop");
  });

  it("log in the console the current button clicked", async () => {
    const click = vi.fn();

    click();

    const currBtn = screen
      .getAllByRole("button", { name: /Add to cart/i })
      .at(0);

    console.log(currBtn);
  });
});
