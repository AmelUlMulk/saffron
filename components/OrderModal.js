import React from "react";
import { Modal } from "antd";
const OrderModal = (props) => {
  return (
    <Modal visible={props.show} onCancel={props.onClose}>
      <div className="Whatmodal">
        <h2>Order</h2>
      </div>
    </Modal>
  );
};

export default OrderModal;
