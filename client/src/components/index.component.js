import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TableRow from './TableRow.js';

function Index() {
  /* States */
  const [business, set_business] = useState([]);

  /* Effects */
  useEffect(() => {
    axios.get('http://localhost:5000/business')
      .then(response => set_business(response.data))
      .catch(error => console.error(error));
  }, []);//componentDidMount()

  /* Functions */
  const tabRow = () => {
    return business.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h5 align="center">Business List</h5>
      <table className="table table-striped table-dark" style={{ fontSize: "0.8rem" }}>
        <thead className="text-center">
          <tr>
            <th>Person</th>
            <th>Business</th>
            <th>GST Number</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody >
          {tabRow()}
        </tbody>
      </table>
    </div>
  );
}

export default Index;