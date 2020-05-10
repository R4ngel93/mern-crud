/* Model */
const Business = require('../models/business.model.js');

/* CRUD methods */
addData = (req, res) => {
  let business = new Business(req.body);
  business.save()
    .then(data => res.status(200).json({ message: 'Data added successfully' }))
    .catch(error => res.status(400).send("Unable to save to database"));
}
getData = (req, res) => {
  Business.find((error, businesses) => {
    error ? console.error(error) : res.json(businesses);
  });
}
editData = (req, res) => {
  const id = req.params.id;
  Business.findById(id, (error, business) => res.json(business));
}
updateData = (req, res) => {
  const id = req.params.id;
  const { person_name, business_name, business_gst_number } = req.body;

  Business.findById(id, (error, business) => {
    if (!business) {
      res.status(404).send("data is not found");
    } else {
      business.person_name = person_name;
      business.business_name = business_name;
      business.business_gst_number = business_gst_number;

      business.save()
        .then(() => res.json('Update complete'))
        .catch(() => res.status(400).send("unable to update the database"));
    }
  });
}
deleteData = (req, res) => {
  Business.findByIdAndRemove({ _id: req.params.id }, (error, business) => {
    error ? res.json(error) : res.json('Successfully removed');
  });
}

/* Exports */
module.exports = {
  addData,
  getData,
  editData,
  updateData,
  deleteData
}