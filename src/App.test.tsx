import React from "react";
import { render, screen } from "@testing-library/react";
import * as dataUtils from "./utils/data";
import App from "./App";

describe("should show correct headings", () => {
  test("renders employee name heading", () => {
    render(<App />);
    const nameColumn = screen.getByText(/employee name/i);
    expect(nameColumn).toBeInTheDocument();
  });
  test("renders absence type heading", () => {
    render(<App />);
    const absenceTypeColumn = screen.getByText(/absence type/i);
    expect(absenceTypeColumn).toBeInTheDocument();
  });
  test("renders start date heading", () => {
    render(<App />);
    const startDateColumn = screen.getByText(/start date/i);
    expect(startDateColumn).toBeInTheDocument();
  });
  test("renders end date heading", () => {
    render(<App />);
    const endDateColumn = screen.getByText(/end date/i);
    expect(endDateColumn).toBeInTheDocument();
  });
  test("renders approval status heading", () => {
    render(<App />);
    const approvalColumn = screen.getByText(/approval status/i);
    expect(approvalColumn).toBeInTheDocument();
  });
});

describe("Should indicate conflicts correctly", () => {
  test("Should indicate a conflict if there is one", () => {
    const mockGetData = jest.spyOn(dataUtils, "getData");
    mockGetData.mockReturnValue(dataUtils.mockDataWithConflict);
    render(<App />);
    const conflictText = screen.getByText(/conflict/i);
    expect(conflictText).toBeInTheDocument();
  });
  test("Should not indicate a conflict if there isn't one", () => {
    render(<App />);
    const conflictText = screen.queryByText(/conflict/i);
    expect(conflictText).not.toBeInTheDocument();
  });
});
