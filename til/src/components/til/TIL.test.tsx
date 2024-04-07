import { render, screen } from "@testing-library/react";
import TIL from "./TIL";
import { describe, it } from "vitest";

describe("TIL", () => {
  it("TIL renders correctly", () => {
    const mockTIL = {
      id: "1",
      title: "Test Title",
      content: "Test Content",
      tags: ["Test Tag"],
      date: new Date("01-01-2024 13:00"),
    };
    render(<TIL til={mockTIL} />);

    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Tag/i)).toBeInTheDocument();
  });
});
