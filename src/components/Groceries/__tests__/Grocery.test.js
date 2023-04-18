import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { assertFails } from "@firebase/rules-unit-testing";
import { set, ref, remove } from "firebase/database";

import { db } from "../../../firebase/config";
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

afterEach(() => cleanup());

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

test('Clicking regular button calls "regular" function', async () => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  fireEvent.click(getByTestId("regular"));

  await assertFails(
    set(ref(db, `/groceries/${user.uid}/${grocery.id}`), {
      regular: true,
    })
  );
});

test('Clicking check1 button calls "check1" function', async () => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  fireEvent.click(getByTestId("check1"));

  await assertFails(
    set(ref(db, `/groceries/${user.uid}/${grocery.id}`), {
      check1: true,
    })
  );
});

test('Clicking check2 button calls "check2" function', async () => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  fireEvent.click(getByTestId("check2"));

  await assertFails(
    set(ref(db, `/groceries/${user.uid}/${grocery.id}`), {
      check2: true,
    })
  );
});

test('Clicking delete button calls "deleteGrocery" function', async () => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  const { getByTestId } = render(
    <Grocery grocery={grocery} user={user} index={index} />
  );

  fireEvent.click(getByTestId("delete"));

  await assertFails(remove(ref(db, `/groceries/${user.uid}/${grocery.id}`)));
});
