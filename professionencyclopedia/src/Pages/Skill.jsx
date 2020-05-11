import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShortID, APIURL } from "../Constants/index";

const Skill = () => {
  let { skillID } = useParams("");
  const [skillName, setSkillName] = useState("");
  const [skillDescription, setSkillDescription] = useState("");
  const [relatedJobs, setRelatedJobs] = useState("");

  useEffect(() => {
    fetch(`${APIURL}/skills/${skillID}`)
      .then((response) => response.json())
      .then((response) => {
        let { skill_name, description } = response;
        setSkillName(skill_name);
        setSkillDescription(description);

        fetch(`${APIURL}/skills/${skillID}/related_jobs`)
          .then((response) => response.json())
          .then((response) => {
            setRelatedJobs(response.jobs);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [skillName]);

  return (
    <>
      <h1>{skillName && skillName}</h1>
      <p>{skillDescription && skillDescription}</p>
      <div>
        <p>Good {skillName && skillName} skill can make: </p>
        {relatedJobs &&
          relatedJobs.map((job) => (
            <div key={ShortID.generate()}>
              <Link className="internal" to={`/jobs/${job.job_uuid}`}>
                {job.job_title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Skill;
