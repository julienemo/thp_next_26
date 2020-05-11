import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Skill from "./Skill";

const Job = () => {
  console.log("page"); // this gets printed again and again -_-!
  const [jobTitle, setJobTitle] = useState("");
  const [jobParent, setJobParent] = useState("");
  const [skills, setSkills] = useState("");

  let { jobID } = useParams("");

  useEffect(() => {
    // get all information I need to show on job page
    fetch(`https://api.dataatwork.org/v1/jobs/${jobID}`)
      .then((response) => response.json())
      .then((response) => {
        let { title, parent_uuid } = response;
        setJobTitle(title);

        // get parent category name and description
        fetch(`https://api.dataatwork.org/v1/jobs/${parent_uuid}`)
          .then((response) => response.json())
          .then((response) => {
            let { title, description } = response;
            setJobParent({ title, description });
          })
          .catch((error) => {
            console.log(error);
          });

        // get related skills
        fetch(`https://api.dataatwork.org/v1/jobs/${jobID}/related_skills`)
          .then((response) => response.json())
          .then((response) => {
            let skills = response.skills;
            setSkills(skills);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setJobTitle("Unable to fetch job");
      });
  }, [jobTitle]);

  return (
    <>
      <h1>{jobTitle && jobTitle}</h1>
      <p>
        Category: <strong>{jobParent && jobParent.title}</strong>
      </p>
      <p>Description: {jobParent && jobParent.description}</p>
      <div>
        <p>
          <strong>Related skills:</strong>
        </p>
        <div>
          {skills &&
            skills.map((skill) => (
              <>
                <Link className="internal" to={`/skills/${skill.skill_uuid}`}>
                  {skill.skill_name}
                </Link>
                <br />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Job;
