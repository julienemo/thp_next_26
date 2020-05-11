import React from "react";
import { Link } from "react-router-dom";

import { ShortID } from "../Constants/index";

const Home = ({ recentQueries }) => {
  console.log(recentQueries);
  return (
    <>
      <h2>Recently consulted pages</h2>
      {recentQueries &&
        recentQueries.map((query) => (
          <div key={ShortID.generate()}>
            <Link className="internal" to={`/jobs/${query.job_uuid}`}>
              {query.job_title}
            </Link>
          </div>
        ))}
    </>
  );
};

export default Home;
