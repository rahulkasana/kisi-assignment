export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const INITIAL_STATE = {
  isVisible: false,
  modalType: null,
  data: {},
  isError: false,
  requesting: false,
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
        active_tab: payload.active_tab,
      };
    case CLOSE_MODAL:
      return {
        isVisible: false,
      };
    // case FETCH_DRIVER_CONSENT:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //     isError: false,
    //   };
    // case FETCH_DRIVER_CONSENT_COMPLETED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     isError: false,
    //   };
    // case FETCH_DRIVER_CONSENT_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     isError: true,
    //     error: payload.error,
    //   };
    default:
      return state;
  }
};

export default ModalReducer;
