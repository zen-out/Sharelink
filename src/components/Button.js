import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
/**********************************************
 * To Do
 * ==================================
 * - [ ] Add styling as an object
 * - [ ]
 ***********************************************/
export default function AddButton(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setURL] = useState("");

  const addLink = () => {};
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-dark waves-effect"
      >
        My Favorite Button
      </button>
    </div>
  );
}
