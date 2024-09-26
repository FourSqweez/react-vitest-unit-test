import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

// Mock axios
vi.mock("axios");

describe("Test UserList component", () => {
  const mockUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      phoneNumber: "0987654321",
    },
  ];

  it("renders the table successfully when API call succeeds", async () => {
    axios.get.mockResolvedValue({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("jane@example.com")).toBeInTheDocument();
      expect(screen.getByText("0987654321")).toBeInTheDocument();
    });
  });

  it("filters users based on search input", async () => {
    axios.get.mockResolvedValue({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText("Search by name or email"), {
        target: { value: "John" },
      });
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    });
  });
});
