import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const comp = render(<Counter />);
  const header = comp.getByTestId("header");
  expect(header.textContent).toBe("My Counter");
});
