import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../constants";
import { close } from "../../../store/modal";

const ConfirmModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { isVisible, modalType } = modal;

  return (
    <>
      <Modal
        title="Are you sure?"
        centered
        visible={isVisible && modalType === MODALS.ASSIGN_LOCKS}
        onOk={() => dispatch(close())}
        onCancel={() => dispatch(close())}
        width={"50%"}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
