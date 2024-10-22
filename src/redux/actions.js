//const url = "http://icd10api.com/"

export const addCar = car => {
  return {
    type: "ADD_CAR",
    value: car
  };
};

export const addClient = client => {
  return {
    type: "ADD_CLIENT",
    value: client
  };
};

export const addEquipment = equipment => {
  return {
    type: "ADD_EQUIP",
    value: equipment
  };
};

export const fetchClients = () => {
  return dispatch => {
    fetch("/api/clients")
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_CLIENTS",
          value: response
        };
        dispatch(action);
      })
    .catch(error => console.log(error));
  };
};

export const fetchClient = id => {
  return dispatch => {
    fetch(`/api/clients/${id}`)
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_CLIENT",
          value: response
        };
        dispatch(action);
      })
      .catch(error => console.log(error));
  };
};

// export const createClient = client => {
//   return dispatch => {
//     fetch(`/api/clients/${id}`, {
//       method: 'POST',
//       body: JSON.stringify({
//         first_name: 
//       })
//     })
//       .then(res => res.json())
//       .then(response => {
//         const action = {
//           type: "CREATE_CLIENT",
//           value: client
//         };
//         dispatch(action);
//       })
//       .catch(error => console.log(error));
//   };
// };

export const removeClient = () => {
  return {
    type: "REMOVE_CLIENT",
    value: []
  };
};

export const login = () => {
  return {
    type: "LOGIN",
    value: true
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    value: false
  };
};
