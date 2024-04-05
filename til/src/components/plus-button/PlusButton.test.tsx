
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PlusButton from "./PlusButton";
import { vi } from "vitest";

describe("PlusButton", () => {
    it("should call onClick when clicked", () => {
        const onClickMock = vi.fn();
        render(<PlusButton onClick={onClickMock} />);
        const plusButton = screen.getByTestId("plus-button");

        fireEvent.click(plusButton);

        expect(onClickMock).toHaveBeenCalled();
    });
});
