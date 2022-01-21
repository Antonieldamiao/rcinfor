import React from "react";
import PropTypes from "prop-types";

import {
  ModalContent,
  LabelEdit,
  InputEdit,
  Conatiner,
  Button,
} from "./styles";

function Modal({ show, handleClose, property, value, handle }) {
  function ignoreHide(event) {
    event.stopPropagation();
  }

  return (
    <ModalContent showModal={show} onClick={handleClose}>
      <Conatiner onClick={ignoreHide}>
        <LabelEdit>{property} </LabelEdit>
        <InputEdit
          type={
            // eslint-disable-next-line no-nested-ternary
            property === "password"
              ? property
              : property === "birthday"
              ? "date"
              : "text"
          }
          onChange={(e) => {
            handle((prev) => {
              return {
                ...prev,
                [property]: e.target.value,
              };
            });
          }}
          value={value || ""}
        />
        <Button onClick={handleClose}>Pronto</Button>
      </Conatiner>
    </ModalContent>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
  value: PropTypes.string,
  handle: PropTypes.func,
};

export default Modal;