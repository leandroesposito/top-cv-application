export default function EducationalInformationViewer({
  handleEdit,
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
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
