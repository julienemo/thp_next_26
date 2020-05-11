import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Job = () => {
  const one = "1";
  const [jobTitle, setJobTitle] = useState("");
  const [jobParent, setJobParent] = useState("");

  let { jobID } = useParams("");

  fetch(`https://api.dataatwork.org/v1/jobs/${jobID}`)
    .then((response) => response.json())
    .then((response) => {
      let { title, parent_uuid } = response;
      setJobTitle(title);
      setJobParent(parent_uuid);
    })
    .catch((error) => {
      console.log(error);
      setJobTitle("Unable to fetch job");
      setJobParent(null);
    });

  return (
    <>
      <h1>{jobTitle && jobTitle}</h1>
      <p>{jobParent && jobParent}</p>
    </>
  );
};

export default Job;
