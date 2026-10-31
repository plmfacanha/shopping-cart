import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "@/App";

// TODO: test for a rejected fetch
describe("getProducts", () => {
  it("mocks a successful fetch request", async () => {
    const mockResponse = {
      id: 0,
      title: "mock jacket",
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

    await screen.findByText(mockResponse.title);

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

  it.todo("check if the function throws if rejected");
});
