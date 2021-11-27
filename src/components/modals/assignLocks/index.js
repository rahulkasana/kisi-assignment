import React, {useEffect} from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../constants";
import { close } from "../../../store/modal";

const AssignLocks = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { isVisible, modalType } = modal;
  const visible = isVisible && modalType === MODALS.ASSIGN_LOCKS;
  useEffect(()=>{

  },[visible])

  return (
    <>
      <Modal
        title="Assign Lock"
        centered
        visible={visible}
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

export default AssignLocks;
