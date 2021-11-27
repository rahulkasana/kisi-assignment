const LocksReducer = (state = {}, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};

export default LocksReducer;
