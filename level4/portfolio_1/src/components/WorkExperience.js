import React from "react";
import work from "./work";

const WorkExperience = () => {
  const jobs = work.map((job) => {
    return (
      <>
        <h3>
          {job.startYear} - {job.endYear}
        </h3>
        <p>{job.company} </p>
        <p>{job.jobTitle} </p>
      </>
    );
  });
  return (
    <>
      <section className="work-experience">
        <h2>Work Experience</h2>
        {jobs}
      </section>
    </>
  );
};

export default WorkExperience;
