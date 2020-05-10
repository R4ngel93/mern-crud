import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TableRow(props) {

  /* Functions */
  const deleteData = () => {
    axios.post('http://localhost:5000/business/delete/' + props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
    window.location.reload(true);
  }

  return (
    <tr >
      <td className="align-middle">
        {props.obj.person_name}
      </td>
      <td className="align-middle">
        {props.obj.business_name}
      </td>
      <td className="align-middle">
        {props.obj.business_gst_number}
      </td>
      <td className="align-middle">
        <Link to={'/edit/' + props.obj._id} className="btn btn-sm btn-outline-primary btn-block">Edit</Link>
      </td>
      <td className="align-middle">
        <button onClick={deleteData} className="btn btn-sm btn-outline-danger btn-block">Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
