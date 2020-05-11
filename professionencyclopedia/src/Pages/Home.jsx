import React from "react";
import { Link } from "react-router-dom";

import { ShortID } from "../Constants/index";

const Home = ({ recentQueries}) => {
  return (
    <>
      <h2>Recently searched jobs</h2>
      {recentQueries &&
        recentQueries.map((query) => (
          <div key={ShortID.generate()}>
            <Link className="internal" to={{
              pathname: `/jobs/${query.job_uuid}`,
              title: query.job_title,
            }}>
              {query.job_title}
            </Link>
          </div>
        ))}
    </>
  );
};

export default Home;
