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

  it("check if button was clicked", async () => {
    const click = vi.fn();

    click();

    expect(click).toHaveBeenCalled();
  });
});
