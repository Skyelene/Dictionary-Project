import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <em>
        <Example example={props.meaning.example} />
      </em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
