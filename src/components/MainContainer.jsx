import "../styles/MainContainer.css";
import PersonalInformationForm from "./PersonalInformationForm.jsx";
import PersonalInformationViewer from "./PersonalInformationViewer.jsx";
import EducationalInformationForm from "./EducationalInformationForm.jsx";
import EducationalInformationViewer from "./EducationalInformationViewer.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import ExperienceViewer from "./ExperienceViewer.jsx";
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

  const [experience, setExperience] = useState([{ id: 0 }]);
  const [editExperienceId, setEditExperienceId] = useState(0);

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

  function generateNewIdFor(array) {
    if (array.length > 0) {
      return array[array.length - 1].id + 1;
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

  function handleEducationalInformationDelete(id) {
    setEducationalInformation(
      educationalInformation.filter((eu) => eu.id !== id)
    );
    setEditEducationalInformationId(
      id === editEducationalInformationId ? -1 : editEducationalInformationId
    );
  }

  function handleAddEducation() {
    const newItemId = generateNewIdFor(educationalInformation);
    setEducationalInformation([...educationalInformation, { id: newItemId }]);
    setEditEducationalInformationId(newItemId);
  }

  function handleExperienceSave(event) {
    const form = event.target.closest("form");
    const formData = new FormData(form);

    const newExperience = {
      companyName: formData.get("companyName"),
      positionTitle: formData.get("positionTitle"),
      mainResponsabilities: formData.get("mainResponsabilities"),
      dateFrom: formData.get("dateFrom"),
      dateUntil: formData.get("dateUntil"),
      id: formData.get("id"),
    };

    setExperience(
      experience.map((e) => (e.id === editExperienceId ? newExperience : e))
    );
    setEditExperienceId(-1);
  }

  function handleExperienceDelete(id) {
    setExperience(experience.filter((e) => e.id !== id));
    setEditExperienceId(id === editExperienceId ? -1 : editExperienceId);
  }

  function handleAddExperience() {
    const newItemId = generateNewIdFor(experience);
    setExperience([...experience, { id: newItemId }]);
    setEditExperienceId(newItemId);
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
              handleDelete={() => handleEducationalInformationDelete(eu.id)}
              educationalInformation={eu}
              key={eu.id}
            />
          ) : (
            <EducationalInformationViewer
              handleEdit={() => setEditEducationalInformationId(eu.id)}
              handleDelete={() => handleEducationalInformationDelete(eu.id)}
              educationalInformation={eu}
              key={eu.id}
            />
          )
        )}
        <button onClick={handleAddEducation}>Add education</button>
      </section>
      <section>
        <h2 className="section-title">Experience</h2>
        {experience.map((e) =>
          e.id === editExperienceId ? (
            <ExperienceForm
              handleSave={handleExperienceSave}
              handleDelete={handleExperienceDelete}
              experienceInformation={e}
              key={e.id}
            />
          ) : (
            <ExperienceViewer
              handeEdit={() => setEditExperienceId(e.id)}
              handleDelete={() => handleExperienceDelete(e.id)}
              experienceInformation={e}
              key={e.id}
            />
          )
        )}
        <button onClick={handleAddExperience}>Add experience</button>
      </section>
    </main>
  );
}
