// import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(userToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const registrationUserApi = async userData => {
//   const { data } = await axios.post('/users/signup', userData);
//   token.set(data.token);
//   return data;
// };

// export const loginUserApi = async userData => {
//   const { data } = await axios.post('/users/login', userData);
//   token.set(data.token);
//   return data;
// };

// export const logoutUserApi = async () => {
//   await axios.post('/users/logout');
//   token.unset();
// };

// export const refreshUserApi = async userToken => {
//   token.set(userToken);
//   const { data } = await axios.get('/users/current');
//   return data;
// };

// export const fetchContactsApi = async() => {
//   return await axios.get('/contacts');
//   };

//   export const addContactApi = async contact => {
//     return await axios.post('/contacts', contact);
//   };

//   export const editContactApi = async contact => {
//     const { id, name, number } = contact;
//     const { data } = await axios.patch(`/contacts/${id}`, { name, number });
//     return data;
//   }
//  export const deleteContactApi = async contactId => {
//   const { data } =  await axios.delete(`/contacts/${contactId}`);
//   return data;
//  }
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(userToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registrationUserApi = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};

export const logoutUserApi = async () => {
  await axios.post('/users/logout');
  token.unset();
};

export const refreshUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export const fetchContactsApi = async() => {
  return await axios.get('/contacts');
};

export const addContactApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const editContactApi = async contact => {
  const { id, name, number } = contact;
  const { data } = await axios.patch(`/contacts/${id}`, { name, number });
  return data;
};

export const deleteContactApi = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  if (response && response.data) {
    return response.data;
  } else {
    throw new Error('Invalid response from server');
  }
};

