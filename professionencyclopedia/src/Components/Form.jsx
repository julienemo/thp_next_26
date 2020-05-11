import React, { useState, useEffect } from "react";
import { BrowerRouter as Router, Switch, Route, Link } from "react-router-dom";

import Suggestion from "./Suggestion";
import Job from "../Pages/Job";

const Form = () => {
  const InputCleaningRegex = /[^a-zA-Z\s]/gi;
  const ShortID = require("shortid");
  const [currentKeyWord, setCurrentKeyWord] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const updateKeyWord = (e) => {
    setCurrentKeyWord(
      e.target.value
        .replace(InputCleaningRegex, "")
        .toLowerCase()
        .split(" ")
        .join("%")
    );
  };

  useEffect(() => {
    if (currentKeyWord.length === 0 || !currentKeyWord) {
      setSuggestions("");
    }
    if (currentKeyWord.length >= 3) {
      fetch(
        `https://api.dataatwork.org/v1/jobs/autocomplete?contains="${currentKeyWord}"`
      )
        .then((response) => response.json())
        .then((response) => {
          let results = response.slice(0, 5);
          let list = results.map((result) => (
            <Suggestion key={ShortID.generate()} {...result} />
          ));
          setSuggestions(<>{list}</>);
        })
        .catch((error) => {
          console.log(error);
          setSuggestions(
            <>
              <Suggestion
                {...{
                  suggestion: "No job matches your search, try something else?",
                  uuid: "",
                }}
              />
            </>
          );
        });
    }
  }, [currentKeyWord]);

  return (
    <form id="navSearch">
      <div className="autocomplete">
        <input
          id="searchInput"
          type="text"
          placeholder="Look up a trade here"
          onChange={updateKeyWord}
        />
        <div className="suggestionList">{suggestions}</div>
      </div>
      <input type="submit" className="btn" value="Search" />
    </form>
  );
};

export default Form;
