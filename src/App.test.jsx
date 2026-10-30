import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "./components/ProductCard";
import App from "./App";

describe("App", () => {
  it("mocks a successful fetch request", async () => {
    const mockResponse = [
      {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      },
    ];

    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [mockResponse],
    });

    render(<App />);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });
});

describe("ProductCard", () => {
  it("check if add to cart button was clicked", async () => {
    // TODO: arrange, act, assert (AAA) for a click event
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
