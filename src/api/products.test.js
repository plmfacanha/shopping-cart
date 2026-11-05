import { describe, expect, it, vi } from "vitest";
import getProducts from "@/api/products";

describe("getProducts", () => {
  it("returns the products when the request succeeds", async () => {
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

    // arrange
    // 1. mock fetch
    globalThis.fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => mockResponse });

    // act
    const products = await getProducts();

    expect(products).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  it("rejects with the same error when fetch itself fails", async () => {
    // arrange
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Error!"));

    // act & assert
    await expect(getProducts()).rejects.toThrow(/error!/i);
  });

  it("rejects with the status code when the server responds with an error", async () => {
    // arrange
    const mockResponse = {
      ok: false,
      status: "404",
    };

    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

    // act & assert
    await expect(getProducts()).rejects.toThrow(/404/);
  });
});
