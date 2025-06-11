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
  const dateFrom = new Date(experienceInformation?.dateFrom);
  const dateUntil = new Date(experienceInformation?.dateUntil);

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
          {String(dateFrom.getUTCMonth() + 1).padStart(2, "0")} /{" "}
          {dateFrom.getUTCFullYear()}
        </div>
        -
        <div className="experience-item date-until">
          {String(dateUntil.getUTCMonth() + 1).padStart(2, "0")} /{" "}
          {dateUntil.getUTCFullYear()}
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
