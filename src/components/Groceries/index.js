import GroceryList from "./GroceryList";
import Grocery from "./Grocery";

import { Container, Row, Accordion } from "react-bootstrap";

// The container for the main section containing:
// The unchcked grocery list (groceries)
// Checked groceries, which are broken down into:
// Regular groceries and nonRegular groceries
// groupGroceries splits these up from the list of all groceries
const Groceries = ({ user, groceries }) => {
  // Group groceries based on criteria above
  const groupGroceries = (groceries) => {
    let unchecked = [],
      regular = [],
      nonRegular = [];
    groceries.forEach((grocery) => {
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

  let [unchecked, regular, nonRegular] = groupGroceries(groceries);

  return (
    <Container>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Groceries</Accordion.Header>
          <Accordion.Body>
            {unchecked &&
              unchecked.map((grocery, i) => {
                return (
                  <Grocery
                    user={user}
                    grocery={grocery}
                    key={grocery.id}
                    index={i}
                  />
                );
              })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Checked Items</Accordion.Header>
          <Accordion.Body>
            <GroceryList user={user} title={"Regular"} groceries={regular} />
            <Row className="mb-3"></Row>
            <GroceryList
              user={user}
              title={"Non-Regular"}
              groceries={nonRegular}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Groceries;
