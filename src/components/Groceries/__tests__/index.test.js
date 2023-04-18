import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { assertFails } from "@firebase/rules-unit-testing";
import { set, ref, remove } from "firebase/database";

import { db } from "../../../firebase/config";
import Groceries from "../index";

const user = { uid: 1 };
const groceries = [
  {
    id: "1",
    grocery: "test1",
    regular: false,
    check1: false,
    check2: false,
  },
  {
    id: "2",
    grocery: "test2",
    regular: true,
    check1: false,
    check2: true,
  },
  {
    id: "3",
    grocery: "test3",
    regular: false,
    check1: false,
    check2: true,
  },
];

afterEach(() => cleanup());

test("Renders all groceries", () => {
  const { container, getByText, getByTestId, getAllByTestId } = render(
    <Groceries groceries={groceries} user={user} />
  );

  expect(getByText(groceries[0].grocery)).toBeInTheDocument();
  expect(getByText(groceries[1].grocery)).toBeInTheDocument();
  expect(getByText(groceries[2].grocery)).toBeInTheDocument();

  // Check that there is only one grocery in each section
  expect(getAllByTestId("unchecked").length).toBe(1);
  expect(getAllByTestId("Regular").length).toBe(1);
  expect(getAllByTestId("Non-Regular").length).toBe(1);
});
