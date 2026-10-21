import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import CardFooter from "./components/ProductCard";

describe("App", () => {
  it("renders the shop heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("FucaSurf Shop");
  });

  it("checks if 'cart' button receives a click event", async () => {
    render(<CardFooter />);
    const user = userEvent.setup();

    await user.click(screen.getAllBy("button", { name: /Add to cart/i }));
  });
});
