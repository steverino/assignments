import {educationData} from "./educationData";

const Education = () => {
  const schools = educationData.map((school) => {
    return (
      <>
        <h3>
          {school.startYear} - {school.endYear}
        </h3>
        <p>{school.schoolName}</p>
        <p>{school.fieldOfStudy}</p>
        <p>{school.degree}</p>
      </>
    );
  });
  return (
    <section className="education">
      <h2>Education</h2>
      {schools}
    </section>
  );
};

export default Education;
