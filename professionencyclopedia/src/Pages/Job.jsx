import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ShortID, APIURL } from "../Constants/index";

const Job = (props) => {
  console.log(props)
  const [jobTitle, setJobTitle] = useState(props.location.title);
  const [jobParent, setJobParent] = useState("");
  const [skills, setSkills] = useState("");

  let { jobID } = useParams("");

  useEffect(() => {
    // get all information I need to show on job page
    fetch(`${APIURL}/jobs/${jobID}`)
      .then((response) => response.json())
      .then((response) => {
        let { parent_uuid } = response;

        if (parent_uuid) {
          // get parent category name and description
          fetch(`${APIURL}/jobs/${parent_uuid}`)
            .then((response) => response.json())
            .then((response) => {
              let { title, description } = response;
              setJobParent({ title, description });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setJobParent({ title: null, description: response.description });
        }


        // get related skills
        fetch(`${APIURL}/jobs/${jobID}/related_skills`)
          .then((response) => response.json())
          .then((response) => {
            let skills = response.skills;
            setSkills(skills);
          })
          .catch((error) => {
            setSkills([
              { skill_name: "no related skill found", skill_uuid: null },
            ]);
          });
      })
      .catch((error) => {
        console.log(error);
        setJobTitle("Unable to fetch job");
      });
  }, [jobID]);

  return (
    <>
      <h1>{jobTitle && jobTitle}</h1>
      {jobParent.title && (<p>
        Category: <strong>{jobParent.title}</strong>
      </p>)}
      
      <p>Description: {jobParent && jobParent.description}</p>
      <div>
        <p>
          <strong>Related skills:</strong>
        </p>
        <div>
          {skills
            ? skills.map((skill) => (
              <div key={ShortID.generate()}>
                  <Link className="internal" to={`/skills/${skill.skill_uuid}`}>
                    {skill.skill_name}
                  </Link>
              </div>
              ))
            : "No related skilled found"}
        </div>
      </div>
    </>
  );
};

export default Job;
