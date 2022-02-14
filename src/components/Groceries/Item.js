import { ListGroupItem, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCheck,
  faTrash,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

const Item = () => {
  return (
    <Row>
      <ListGroupItem>
        <Row s={6}>
          <Col s={3}>Test</Col>
          <Col className="text-center" s={3}>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faRotate} color="green" />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faCheckCircle} color="green" />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faCheckCircle} />
              </Col>
              <Col>
                <FontAwesomeIcon icon={faTrash} color="red" />
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </Row>
  );
};

export default Item;
