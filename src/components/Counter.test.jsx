import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("should render 'counter'", () => {
    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
  });

  it("increments counter", () => {
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
});
