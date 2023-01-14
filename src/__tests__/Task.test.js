import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render();
  expect(screen.queryByText("text!"));
});

test("displays the task category", () => {
  render();
  expect(screen.queryByText("category!"));
});

test("is removed from the list when the delete button is clicked", () => {
  render();
  const task = screen.queryByText(/Buy rice/);
  const deleteButton = task

  fireEvent;

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
