import { screen, render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import { vi } from "vitest";

describe("Modal", () => {
  it("renders the modal when isOpen is true", () => {
    const onClose = vi.fn();
    const title = "Test Modal";
    const contentText = "Modal Content";

    render(
      <Modal isOpen={true} onClose={onClose} title={"Test Modal"}>
        <div>{contentText}</div>
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    const onClose = vi.fn();
    const title = "Test Modal";
    const contentText = "Modal Content";

    render(
      <Modal isOpen={false} onClose={onClose} title={"Test Modal"}>
        <div>{contentText}</div>
      </Modal>
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();
  });

  it("calls the onClose function when the modal is closed", () => {
    const onClose = vi.fn();
    const title = "Test Modal";
    const contentText = "Modal Content";

    render(
      <Modal isOpen={true} onClose={onClose} title={"Test Modal"}>
        <div>{contentText}</div>
      </Modal>
    );

    const closeButton = screen.getByTestId("modal-close-button");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
