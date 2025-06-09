import { useState } from "react";
import FormField from "./FormField.jsx";

/*
  Practical Experience
    company name
    position title
    main responsibilities of your jobs
    date from and until
*/

export default function ExperienceForm({
  handleSave,
  handleDelete,
  experienceInformation,
}) {
  const [formData, setFormData] = useState({
    companyName: null,
    positionTitle: null,
    mainResponsabilities: null,
    dateFrom: "null",
    dateUntil: null,
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
          <h2>Experience Information</h2>
        </legend>
        <FormField
          label="Company name"
          name="companyName"
          onChange={handleChange}
          value={
            formData.companyName ?? experienceInformation.companyName ?? ""
          }
        />
        <FormField
          label="Position title"
          name="positionTitle"
          onChange={handleChange}
          value={
            formData.positionTitle ?? experienceInformation.positionTitle ?? ""
          }
        />
        <div className={`form-field row`}>
          <label htmlFor="mainResposabilities">Main Responsabilities</label>
          <textarea
            id="mainResponsabilities"
            name="mainResponsabilities"
            onChange={handleChange}
            value={
              formData.mainResponsabilities ??
              experienceInformation.mainResponsabilities ??
              ""
            }
          ></textarea>
        </div>
        <FormField
          label="From"
          name="dateFrom"
          onChange={handleChange}
          type="date"
          value={formData.dateFrom ?? experienceInformation.dateFrom ?? ""}
        />
        <FormField
          label="To"
          name="dateTo"
          onChange={handleChange}
          type="date"
          value={formData.dateTo ?? experienceInformation.dateTo ?? ""}
        />
        <input type="hidden" name="id" value={experienceInformation.id} />
        <div className="buttons-container">
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </fieldset>
    </form>
  );
}
