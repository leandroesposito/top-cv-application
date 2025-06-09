export default function ExperienceViewer({
  handleEdit,
  handleDelete,
  experienceInformation = {},
}) {
  /*
  company name
    position title
    main responsibilities of your jobs
    date from and until
   */
  return (
    <div className="experience-information">
      <div className="experience-item company-name">
        {experienceInformation.companyName}
      </div>
      <div className="experience-item position-title">
        {experienceInformation.positionTitle}
      </div>
      <div className="experience-item main-resposabilities">
        {experienceInformation.mainResponsabilities}
      </div>
      <div className="row">
        <div className="experience-item date-from">
          {experienceInformation.dateFrom}
        </div>
        <div className="experience-item date-until">
          {experienceInformation.dateUntil}
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
