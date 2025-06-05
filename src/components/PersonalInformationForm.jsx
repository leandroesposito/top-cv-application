import FormField from "./FormField.jsx";
import { useState } from "react";
import "../styles/Form.css";

export default function PersonalInformationForm({
  handleSave,
  personalInformation = {},
}) {
  /**
   Personal information
    name
    email
    phone number
  */

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
  });

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  return (
    <form>
      <fieldset>
        <legend>
          <h2>Personal Information</h2>
        </legend>
        <FormField
          name="name"
          label="Name"
          value={formData.name || personalInformation.name}
          onChange={handleChange}
        />
        <FormField
          name="email"
          label="Email"
          value={formData.email || personalInformation.email}
          type="email"
          placeholder="email@example.com"
          onChange={handleChange}
        />
        <FormField
          name="phone"
          label="Phone number"
          value={formData.phone || personalInformation.phone}
          type="tel"
          placeholder="555-555-555"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </fieldset>
    </form>
  );
}
