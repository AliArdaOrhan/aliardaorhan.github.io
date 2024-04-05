import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header component correctly", () => {
    render(<Header />);

    // Assert that the logo is rendered with the correct alt text
    expect(screen.getByAltText("header-image")).toBeInTheDocument();

    // Assert that the header text is rendered
    expect(screen.getByText("TODAY I LEARNED")).toBeInTheDocument();

    // Assert that the description text is rendered
    expect(
      screen.getByText(
        "Hi, I'm Ali Arda. I don't know what to call this page. Is it blog or twitter fake? Dunno. But hope you enjoy content in it"
      )
    ).toBeInTheDocument();
  });
});
