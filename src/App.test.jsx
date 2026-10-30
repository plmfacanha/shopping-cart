import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "./components/ProductCard";
import App from "./App";

describe("App", () => {
  it("mocks a successful fetch request", async () => {
    const mockResponse = {
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com",
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => [mockResponse],
    });

    render(<App />);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  it("mock an unsuccessful fetch request", async () => {
    const mockResponse = {
      status: "404",
      message: "Error",
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockRejectedValue({
      ok: false,
      json: async () => [mockResponse],
    });

    render(<App />);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });
});

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
