import { describe, expect, it, vi } from "vitest";
import getProducts from "@/api/products";

describe("getProducts", () => {
  it("fetch data with success", async () => {
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

  it("fetch that throws", async () => {
    // arrange
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Error!"));

    // act & assert
    await expect(getProducts()).rejects.toThrow(/error!/i);
  });

  it("fetch returns fake HTTP error response", async () => {
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
