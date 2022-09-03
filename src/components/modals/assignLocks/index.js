import React, { useState } from "react";
import { Modal, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../constants";
import { close } from "../../../store/modal";
import LocksInput from "../../common/locksInput";
import { createGroupLock } from "../../../store/groupLocks";

const AssignLocks = () => {
  const [loading, setLoading] = useState(false);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { isVisible, modalType, data } = modal;
  const visible = isVisible && modalType === MODALS.ASSIGN_LOCKS;

  const onFinish = (values) => {
    const { locks = [] } = values;
    let p = [];
    for (const lock of locks) {
      const { value } = lock;
      p.push(
        dispatch(
          createGroupLock({
            group_lock: {
              group_id: data.groupId,
              lock_id: value,
            },
          })
        )
      );
    }
    window.gtag('event','assigned_locks')
    Promise.all(p).then((values) => {
      setLoading(false);
      dispatch(close());
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onFinish(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const closeModal = () => {
    form.resetFields();
    dispatch(close());
  };

  return (
    <>
      <Modal
        title="Assign Lock"
        centered
        visible={visible}
        okButtonProps={{ loading: loading }}
        onOk={handleSubmit}
        onCancel={closeModal}
        width={"50%"}
      >
        <Form
          layout="vertical"
          form={form}
          name="assign-lock"
          onFinish={onFinish}
        >
          <Form.Item
            name="locks"
            label="Locks"
            rules={[
              {
                required: true,
                message: "Atleast one lock is required to add",
              },
            ]}
          >
            <LocksInput />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AssignLocks;
