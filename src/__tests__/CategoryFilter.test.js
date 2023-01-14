import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render();
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category))
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render;

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent;

  expect(codeButton);
  expect(allButton);
});

test("clicking the category button filters the task list", () => {
  render();

  const codeButton = screen.queryByRole("button", { name: "Code" });

  fireEvent;

  expect(screen.queryByText("Build a todo app"));
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render();

  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent;

  expect(screen.queryByText("Build a todo app"));
  expect(screen.queryByText("Buy rice"));
});
