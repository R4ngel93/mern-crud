import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Edit(props) {
  /* States */
  const [person_name, set_person_name] = useState('');
  const [business_name, set_business_name] = useState('');
  const [business_gst_number, set_business_gst_number] = useState('');

  /* Efects */
  useEffect(() => {
    axios.get('http://localhost:5000/business/edit/' + props.match.params.id)
      .then(response => {
        set_person_name(response.data.person_name);
        set_business_name(response.data.business_name);
        set_business_gst_number(response.data.business_gst_number);
      })
      .catch(error => console.error(error));
  }, [props.match.params.id]);//componentDidMount()

  /* Functions */
  const onChangePersonName = e => set_person_name(e.target.value);
  const onChangeBusinessName = e => set_business_name(e.target.value);
  const onChangeGstNumber = e => set_business_gst_number(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    const obj = {
      person_name,
      business_name,
      business_gst_number
    };

    axios.post('http://localhost:5000/business/update/' + props.match.params.id, obj)
      .then(res => {
        console.log(res.data)
        window.location.reload();
      });
    props.history.push('/index')
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3 align="center">Update Business</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Person Name:  </label>
          <input
            type="text"
            className="form-control"
            value={person_name}
            onChange={onChangePersonName}
          />
        </div>
        <div className="form-group">
          <label>Business Name: </label>
          <input type="text"
            className="form-control"
            value={business_name}
            onChange={onChangeBusinessName}
          />
        </div>
        <div className="form-group">
          <label>GST Number: </label>
          <input type="text"
            className="form-control"
            value={business_gst_number}
            onChange={onChangeGstNumber}
          />
        </div>
        <div className="form-group">
          <input type="submit"
            value="Update Business"
            className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default Edit;