import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  /* States */
  const [person_name, set_person_name] = useState('');
  const [business_name, set_business_name] = useState('');
  const [business_gst_number, set_business_gst_number] = useState('');

  /* Functions */
  const onChangePersonName = event => set_person_name(event.target.value);
  const onChangeBusinessName = event => set_business_name(event.target.value);
  const onChangeGstNumber = event => set_business_gst_number(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    //console.log(`The values are ${person_name}, ${business_name} and ${business_gst_number}`);

    /* Axios */
    const obj = {
      person_name,
      business_name,
      business_gst_number
    };

    axios.post('http://localhost:5000/business/add', obj)
      .then(res => console.log(res.data));
    /* End axios */

    set_person_name('');
    set_business_name('');
    set_business_gst_number('');
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h5>Add new business</h5>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Add person name: </label>
          <input type="text" className="form-control" value={person_name} onChange={onChangePersonName} />
        </div>
        <div className="form-group">
          <label>Add business name: </label>
          <input type="text" className="form-control" value={business_name} onChange={onChangeBusinessName} />
        </div>
        <div className="form-group">
          <label>Add GST number: </label>
          <input type="text" className="form-control" value={business_gst_number} onChange={onChangeGstNumber} />
        </div>
        <div className="form-group">
          <input type="submit" value="Register business" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default Create;