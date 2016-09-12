export const setUser = (store, postData) => {
  const dispatch = store.dispatch;
  dispatch('SET_USER', postData);
};

export const addUser = (store, data) => {
  const dispatch = store.dispatch;
  dispatch('ADD_USER', data);
};

export const updateUser = (store, index, data) => {
  const dispatch = store.dispatch;
  dispatch('UPDATE_USER', index, data);
};

export const deleteUser = (store, data) => {
  const dispatch = store.dispatch;
  dispatch('DELETE_USER', data);
};
