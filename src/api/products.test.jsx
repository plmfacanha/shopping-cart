import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import getProducts from "@/api/products";
import App from "@/App";

// TODO: test for a rejected fetch
describe("getProducts", () => {
  it("checks if the function returns a error when rejected", async () => {});
});
