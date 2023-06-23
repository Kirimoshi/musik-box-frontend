import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Comment from "../Comment";

describe("Comment component", () => {
  test("renders comment input and button", () => {
    render(<Comment />);
    
    const commentInput = screen.getByLabelText("comment");
    expect(commentInput).toBeInTheDocument();

    const commentButton = screen.getByRole("button", { name: "leave a comment" });
    expect(commentButton).toBeInTheDocument();
  });

  test("adds a new comment when the 'leave a comment' button is clicked", () => {
    render(<Comment />);

    const commentInput = screen.getByLabelText("comment");
    const commentButton = screen.getByRole("button", { name: "leave a comment" });

    fireEvent.change(commentInput, { target: { value: "New comment" } });
    fireEvent.click(commentButton);

    const newComment = screen.getByText("New comment");
    expect(newComment).toBeInTheDocument();
  });

  test("clears the comment input when the 'x' button is clicked", () => {
    render(<Comment />);

    const commentInput = screen.getByLabelText("comment");
    const clearButton = screen.getByTestId("closetest2");

    fireEvent.change(commentInput, { target: { value: "Some comment" } });
    fireEvent.click(clearButton);

    expect(commentInput.value).toBe(" ");
  });
});
