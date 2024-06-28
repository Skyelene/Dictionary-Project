import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definition}

      <div className="definition">
        <Example example={props.meaning.example} />
      </div>

      <div className="example">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
