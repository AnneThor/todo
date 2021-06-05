import { useState } from 'react';

// the below is a generic business logic for a form
// that collects and returns inputs in an object
// callback param function handles form submit
function formLogic(callback) {

  const [formData, setFormData] = useState({});

  function handleChange(e) {
    e.persist(); // necessary step
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    callback(formData);
  }

  return [handleSubmit, handleChange, formData];

}

export default formLogic;
