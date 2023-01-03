import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
  const header = getByTestId("header");
  expect(header.textContent).toBe("My Counter");
});

test("counter initially starts with 0", () => {
  const cnt = getByTestId("counter");
  expect(cnt.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const inp = getByTestId("inputC");
  expect(inp.value).toBe("1");
});

test("add button contains +", () => {
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("sub button contains -", () => {
  const subBtn = getByTestId("sub-btn");

  expect(subBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const inp = getByTestId("inputC");
  expect(inp.value).toBe("1");
  fireEvent.change(inp, {
    target: {
      value: "5",
    },
  });
  expect(inp.value).toBe("5");
});

test("add button should add 1 to the counterValue", () => {
  const addBtn = getByTestId("add-btn");
  const counter = getByTestId("counter");
  const val = counter.textContent;
  expect(val).toBe("0");
  fireEvent.click(addBtn);
  expect(counter.textContent).toBe("1");
});

test("sub button should subtract input vaue correctly", () => {
  const subBtn = getByTestId("sub-btn");
  const counter = getByTestId("counter");
  const val = counter.textContent;
  expect(val).toBe("0");
  fireEvent.click(subBtn);
  expect(counter.textContent).toBe("-1");
});

test("firing add button after changing input value", () => {
  const addBtn = getByTestId("add-btn");
  const counter = getByTestId("counter");
  const input = getByTestId("inputC");
  const val = counter.textContent;
  expect(val).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtn);
  expect(counter.textContent).toBe("5");
});

test("firing sub button after changing input value", () => {
  const subBtn = getByTestId("sub-btn");
  const counter = getByTestId("counter");
  const input = getByTestId("inputC");
  const val = counter.textContent;
  expect(val).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subBtn);
  expect(counter.textContent).toBe("-5");
});

test("firing bith add and subtract buttons after changing input value", () => {
  const subBtn = getByTestId("sub-btn");
  const addBtn = getByTestId("add-btn");
  const counter = getByTestId("counter");
  const input = getByTestId("inputC");
  const val = counter.textContent;
  expect(val).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(subBtn);
  expect(counter.textContent).toBe("-10");
  fireEvent.change(input, {
    target: {
      value: "80",
    },
  });
  fireEvent.click(addBtn);
  expect(counter.textContent).toBe("70");
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subBtn);
  fireEvent.click(subBtn);
  expect(counter.textContent).toBe("150");
});

test("counter contains correct class name", () => {
  const counter = getByTestId("counter");
  const addBtn = getByTestId("add-btn");
  const subBtn = getByTestId("sub-btn");
  const input = getByTestId("inputC");
  expect(counter.className).toBe("");
  fireEvent.change(input, {
    target: {
      value: "200",
    },
  });
  fireEvent.click(addBtn);
  expect(counter.className).toBe("green");
  fireEvent.click(subBtn);
  fireEvent.click(subBtn);
  expect(counter.className).toBe("red");
  fireEvent.click(addBtn);
  expect(counter.className).toBe("");
});
