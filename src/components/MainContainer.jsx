import "../styles/MainContainer.css";
import PersonalInformationForm from "./PersonalInformationForm.jsx";

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

  const personalInformation = {
    name: "John Doe",
    email: "John@Doe.com",
    phone: "123-456-789",
  };

  return (
    <main>
      <PersonalInformationForm personalInformation={personalInformation} />
    </main>
  );
}
