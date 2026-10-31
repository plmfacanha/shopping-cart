import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import getProducts from "@/api/products";

// TODO: test for a rejected fetch
describe("getProducts", () => {
  it("fetch data sucessfully", async () => {
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
  });
});
