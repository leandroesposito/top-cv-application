import FormField from "./FormField.jsx";
import { useState } from "react";
import "../styles/Form.css";

export default function EducationalInformationForm({
  handleSave,
  handleDelete,
  educationalInformation = {},
}) {
  /**
  Educational
    school name
    title of study
    year of finish
  */

  const [formData, setFormData] = useState({
    schoolName: null,
    title: null,
    finishYear: null,
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
          <h2>Educational Information</h2>
        </legend>
        <FormField
          name="schoolName"
          label="School name"
          value={formData.schoolName ?? educationalInformation.schoolName ?? ""}
          onChange={handleChange}
        />
        <FormField
          name="title"
          label="Title"
          value={formData.title ?? educationalInformation.title ?? ""}
          onChange={handleChange}
        />
        <FormField
          name="finishYear"
          label="Year of Finish"
          value={formData.finishYear ?? educationalInformation.finishYear ?? ""}
          type="number"
          onChange={handleChange}
          min="1950"
          max={new Date().getFullYear()}
        />
        <input type="hidden" value={educationalInformation?.id} name="id" />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button onClick={handleDelete}>Delete</button>
      </fieldset>
    </form>
  );
}
