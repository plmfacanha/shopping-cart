import { render, screen } from "@testing-library/react";
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
    const data = await getProducts();

    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  it.todo("fetch with no success", async () => {
    const mockResponse = {
      status: "404",
      message: "Something went wrong",
    };

    globalThis.fetch = vi.fn().mockRejectedValue({
      ok: false,
      json: async () => mockResponse,
    });

    const data = await getProducts();
    expect(data).toHaveBeenCalled();
  });
});
