import "../styles/EducationalInformation.css";

export default function EducationalInformationViewer({
  handleEdit,
  handleDelete,
  educationalInformation = {},
}) {
  return (
    <div className="educational-information">
      <div className="educational-item school-name">
        {educationalInformation.schoolName}
      </div>
      <div className="educational-item educational-title">
        {educationalInformation.title}
      </div>
      <div className="educational-item finish-year">
        {educationalInformation.finishYear}
      </div>
      <div className="buttons-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
