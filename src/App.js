import React, { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response.ok) {
          throw Error('Did not receive expected data from server');
        }
        const items = await response.json();
        setItems(items);
      }
      catch(err) {
        setFetchError(err.message);
      }
    }
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {fetchError && (
        <p
          style={{ color: "red", fontSize: 15, marginTop: 20, justifyContent: "center" }}
        >{`Error: ${fetchError}`}</p>
      )}
      {!fetchError && <Table items={items} />}
    </div>
  );
}

export default App;
