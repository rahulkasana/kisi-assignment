import React from "react";
import { Modal, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../constants";
import { close } from "../../../store/modal";
import LocksInput from "../../common/locksInput";
import { createGroupLock } from "../../../store/groupLocks";

const AssignLocks = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { isVisible, modalType, data } = modal;
  const visible = isVisible && modalType === MODALS.ASSIGN_LOCKS;
  // const groupLocksData = useSelector((state) => state.groupLocks?.data) || [];
  // useEffect(() => {
  //   groupLocksData.forEach((groupLock) => {
  //     console.log("groupLock ----", groupLock);
  //   });
  //   // eslint-disable-next-line
  // }, [visible]);

  const onFinish = (values) => {
    const { locks } = values;
    locks.forEach((lock) => {
      const { value } = lock;
      dispatch(
        createGroupLock({
          group_lock: {
            group_id: data.groupId,
            lock_id: value,
          },
        })
      );
    });
    dispatch(close());
  };

  return (
    <>
      <Modal
        title="Assign Lock"
        centered
        visible={visible}
        onOk={() => form.submit()}
        onCancel={() => dispatch(close())}
        width={"50%"}
      >
        <Form form={form} name="assign-lock" onFinish={onFinish}>
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
