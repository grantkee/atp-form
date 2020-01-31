import React from 'react';
import MaterialTable from 'material-table';

export default function Content2( props ) { 
    if(props.clients.length === 0){
        props.fetchClients()
    }

  const [state, setState] = React.useState({
    columns: [
        //field needs to correspond with the object key => first_name and date_of_birth work
      { title: 'Name', field: 'first_name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'date_of_birth', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: props.clients
  });

  debugger

  return (
      <>
      {console.log(state.data)}
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={props.clients}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </>
  );
}