import React from "react";
import { Modal } from "antd";
const ContactUs = (props) => {
  return (
    <Modal visible={props.show} onCancel={props.onClose}>
      <div className="Whatmodal">
        <h2>Contact Us Directly</h2>
      </div>
    </Modal>
  );
};

export default ContactUs;
