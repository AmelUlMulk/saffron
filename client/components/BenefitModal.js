import React from "react";
import { Modal } from "antd";
const BenefitModal = (props) => {
  return (
    <Modal visible={props.show} onCancel={props.onClose}>
      <div className="Whatmodal">
        <h2>Benifits</h2>
      </div>
    </Modal>
  );
};

export default BenefitModal;
