import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Grocery from "../Grocery";

const grocery = {
  id: "1",
  grocery: "test",
  regular: false,
  check1: false,
  check2: false,
};
const user = { uid: 1 };
const index = 1;

test("Renders Grocery component", () => {
  const { container, getByText, getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  expect(getByText(grocery.grocery)).toBeInTheDocument();
  expect(getByTestId("regular")).toBeInTheDocument();
  expect(getByTestId("check1")).toBeInTheDocument();
  expect(getByTestId("check2")).toBeInTheDocument();
  expect(getByTestId("delete")).toBeInTheDocument();
});

test("All buttons are unchecked", () => {
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  expect(getByTestId("regular")).toHaveStyle("color: ");
  expect(getByTestId("check1")).toHaveStyle("color: ");
  expect(getByTestId("check2")).toHaveStyle("color: ");
  expect(getByTestId("delete")).toHaveStyle("color: red");
});

test("Regular button is checked", () => {
  const { getByTestId } = render(
    <Grocery
      grocery={{ ...grocery, regular: true }}
      user={user}
      index={index}
    />
  );

  expect(getByTestId("regular")).toHaveStyle("color: green");
});

test("Check1 button is checked", () => {
  const { getByTestId } = render(
    <Grocery grocery={{ ...grocery, check1: true }} user={user} index={index} />
  );

  expect(getByTestId("check1")).toHaveStyle("color: green");
});

test("Check2 button is checked", () => {
  const { getByTestId } = render(
    <Grocery grocery={{ ...grocery, check2: true }} user={user} index={index} />
  );

  expect(getByTestId("check2")).toHaveStyle("color: green");
});

test.skip('clicking "regular" button calls regular function', () => {
  const regular = jest.fn();
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} regular={regular} />
  );

  fireEvent.click(getByTestId("regular"));
  expect(regular).toHaveBeenCalledTimes(1);
});
