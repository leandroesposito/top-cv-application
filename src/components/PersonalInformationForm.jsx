import FormField from "./FormField.jsx";

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
  return (
    <fieldset>
      <legend>Personal Information</legend>
      <FormField name="name" label="Name" value={personalInformation.name} />
      <FormField
        name="email"
        label="Email"
        value={personalInformation.email}
        type="email"
        placeholder="email@example.com"
      />
      <FormField
        name="phone"
        label="Phone number"
        value={personalInformation.phone}
        type="tel"
        placeholder="555-555-555"
      />
        <button type="button" onClick={handleSave}>
          Save
        </button>
    </fieldset>
  );
}
