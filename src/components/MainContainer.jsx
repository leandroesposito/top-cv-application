import "../styles/MainContainer.css";
import PersonalInformationForm from "./PersonalInformationForm.jsx";
import { useState } from "react";

export default function MainContainer() {
  /**
  Personal information
    name
    email
    phone number
  Educational
    school name
    title of study
    date of study
  Practical Experience
    company name
    position title
    main responsibilities of your jobs
    date from and until
  */

  const [editPersonalInformation, setEditPersonalInformation] = useState(true);

  const [personalInformation, setPersonalInformation] = useState({
    name: "John Doe",
    email: "John@Doe.com",
    phone: "123-456-789",
  });

  function handlePersonalInformationSave(event) {
    const form = event.target.closest("form");
    const formData = new FormData(form);

    const newPersonalInformation = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    setPersonalInformation(newPersonalInformation);
    setEditPersonalInformation(false);
  }

  return (
    <main>
      {editPersonalInformation === true ? (
        <PersonalInformationForm
          handleSave={handlePersonalInformationSave}
          personalInformation={personalInformation}
        />
      ) : (
        <button onClick={() => setEditPersonalInformation(true)}>Edit</button>
      )}
    </main>
  );
}
