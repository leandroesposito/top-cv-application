import "../styles/MainContainer.css";
import PersonalInformationForm from "./PersonalInformationForm.jsx";
import PersonalInformationViewer from "./PersonalInformationViewer.jsx";
import EducationalInformationForm from "./EducationalInformationForm.jsx";
import EducationalInformationViewer from "./EducationalInformationViewer.jsx";
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

  const [educationalInformation, setEducationalInformation] = useState([
    { id: 0 },
  ]);
  const [editEducationalInformationId, setEditEducationalInformationId] =
    useState(0);

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

  function generateEducationalInformationId() {
    if (educationalInformation.length > 0) {
      return educationalInformation[educationalInformation.length - 1].id + 1;
    }

    return 0;
  }

  function handleEducationalInformationSave(event) {
    const form = event.target.closest("form");
    const formData = new FormData(form);

    const newEducationalInformation = {
      schoolName: formData.get("schoolName"),
      title: formData.get("title"),
      finishYear: formData.get("finishYear"),
      id: parseInt(formData.get("id")),
    };

    setEducationalInformation(
      educationalInformation.map((eu) =>
        eu.id === editEducationalInformationId ? newEducationalInformation : eu
      )
    );
    setEditEducationalInformationId(-1);
  }

  function handleAddEducation() {
    const newItemId = generateEducationalInformationId();
    setEducationalInformation([...educationalInformation, { id: newItemId }]);
    setEditEducationalInformationId(newItemId);
  }

  return (
    <main>
      <section>
        {editPersonalInformation === true ? (
          <PersonalInformationForm
            handleSave={handlePersonalInformationSave}
            personalInformation={personalInformation}
          />
        ) : (
          <PersonalInformationViewer
            handleEdit={() => setEditPersonalInformation(true)}
            personalInformation={personalInformation}
          />
        )}
      </section>
      <section>
        <h2 className="section-title">Education</h2>
        {educationalInformation.map((eu) =>
          eu.id === editEducationalInformationId ? (
            <EducationalInformationForm
              handleSave={handleEducationalInformationSave}
              educationalInformation={eu}
              key={eu.id}
            />
          ) : (
            <EducationalInformationViewer
              handleEdit={() => setEditEducationalInformationId(eu.id)}
              educationalInformation={eu}
              key={eu.id}
            />
          )
        )}
        <button onClick={handleAddEducation}>Add education</button>
      </section>
    </main>
  );
}
