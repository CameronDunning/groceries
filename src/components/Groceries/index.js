import GroceryList from "./GroceryList";
import Grocery from "./Grocery";

import { Container, Row, Accordion } from "react-bootstrap";

const Groceries = ({ groceries }) => {
  console.log(groceries);
  let unchecked = [],
    regular = [],
    nonRegular = [];
  const groupGroceries = (groceries) => {
    let unchecked = [],
      regular = [],
      nonRegular = [];
    groceries.forEach((grocery) => {
      console.log(grocery);
      if (grocery.check2) {
        if (grocery.regular) {
          regular.push(grocery);
        } else {
          nonRegular.push(grocery);
        }
      } else {
        unchecked.push(grocery);
      }
    });
    return [unchecked, regular, nonRegular];
  };

  [unchecked, regular, nonRegular] = groupGroceries(groceries);

  return (
    <Container>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Groceries</Accordion.Header>
          <Accordion.Body>
            {unchecked &&
              unchecked.map((grocery) => {
                return <Grocery grocery={grocery} key={grocery.id} />;
              })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Checked Items</Accordion.Header>
          <Accordion.Body>
            <GroceryList title={"Regular"} groceries={regular} />
            <Row className="mb-3"></Row>
            <GroceryList
              title={"Non-Regular"}
              groceries={nonRegular}
              key="nonRegular"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Groceries;
