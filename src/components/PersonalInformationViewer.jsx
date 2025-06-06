import "../styles/PersonalInformation.css";

export default function PersonalInformationViewer({
  handleEdit,
  personalInformation = {},
}) {
  return (
    <div className="personal-information">
      <div className="name personal-item">{personalInformation.name}</div>
      <div className="personal-item">Email: {personalInformation.email}</div>
      <div className="personal-item">
        Phone Number: {personalInformation.phone}
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
