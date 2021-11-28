import {
  CREATE_GROUP_LOCKS,
  CREATE_GROUP_LOCKS_COMPLETED,
  CREATE_GROUP_LOCKS_FAILED,
  DELETE_GROUP_LOCK,
  DELETE_GROUP_LOCK_COMPLETED,
  DELETE_GROUP_LOCK_FAILED,
} from "../groupLocks";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const INITIAL_STATE = {
  isVisible: false,
  modalType: null,
  data: {},
  isRequesting: false,
  isError: false,
  error: "",
};

export const open = (modalType, data) => {
  return (dispatch) => {
    dispatch({ type: OPEN_MODAL, payload: { modalType, data } });
  };
};

export const close = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_MODAL });
  };
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        isVisible: true,
        modalType: payload.modalType,
        data: payload.data,
      };
    case CLOSE_MODAL:
      return {
        isVisible: false,
      };
    case CREATE_GROUP_LOCKS:
    case DELETE_GROUP_LOCK:
      return {
        ...state,
        isRequesting: true,
        error: "",
        isError: false,
      };
    case CREATE_GROUP_LOCKS_COMPLETED:
    case DELETE_GROUP_LOCK_COMPLETED:
      return {
        ...state,
        isRequesting: false,
        error: "",
        isError: false,
      };
    case CREATE_GROUP_LOCKS_FAILED:
    case DELETE_GROUP_LOCK_FAILED:
      return {
        ...state,
        isRequesting: false,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default ModalReducer;
