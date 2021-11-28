import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../constants";
import { close } from "../../../store/modal";
import { deleteGroupLock } from "../../../store/groupLocks";

const ConfirmModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { isVisible, modalType, data: { groupLockId } = {} } = modal;

  const deAssignLock = () => {
    if (groupLockId) {
      dispatch(deleteGroupLock(groupLockId));
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch(close());
  };

  return (
    <>
      <Modal
        title="Are you sure?"
        centered
        visible={isVisible && modalType === MODALS.DE_ASSIGN_LOCKS}
        onOk={deAssignLock}
        onCancel={closeModal}
        width={"50%"}
      >
        Confirm you want to deassign this lock.
      </Modal>
    </>
  );
};

export default ConfirmModal;
