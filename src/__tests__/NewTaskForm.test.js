import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    
  );

  fireEvent, {
    target: { value: "Pass the tests" },
  };

  fireEvent, {
    target: { value: "Code" },
  };

  fireEvent;

  expect(onTaskFormSubmit)
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  
});

test("adds a new item to the list when the form is submitted", () => {
  render

  const codeCount = screen.queryAllByText(/Code/).length;

  fireEvent, {
    target: { value: "Pass the tests" },
  };

  fireEvent, {
    target: { value: "Code" },
  };

  fireEvent;

  expect(screen.queryByText(/Pass the tests/));

  expect(screen.queryAllByText(/Code/).length);
})