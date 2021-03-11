import React from "react";
import { Modal } from "antd";
const WhatWeOfferModal = (props) => {
  console.log("receiveing props", props);
  return (
    <Modal visible={props.show} onCancel={props.onClose}>
      <div className="Whatmodal">
        <h2>Our Offers</h2>
      </div>
    </Modal>
  );
};

export default WhatWeOfferModal;
