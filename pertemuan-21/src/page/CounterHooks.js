import { useState } from "react";
import { addCounter, minusCounter } from "../redux/actions/counter.actions";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

function CounterHooks() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter.counter);
  console.log(counter);

  const [dataModal, setDataModal] = useState("");
  const [dataShow, setDataShow] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCloseSave = () => {
    setShowModal(false);
    setDataShow(dataModal);
  };

  const handleChangeModal = (e) => {
    setDataModal(e.target.value);
  };

  console.log(dataModal);

  return (
    <div>
      <div>
        <Button onClick={() => dispatch(addCounter())}> + </Button>
        <h1>{counter}</h1>
        <Button onClick={() => dispatch(minusCounter())}> - </Button>
      </div>

      <div>
        <Button onClick={handleShow}>Modal</Button>
        <h1>{dataShow}</h1>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Todo"
              onChange={handleChangeModal}
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CounterHooks;
