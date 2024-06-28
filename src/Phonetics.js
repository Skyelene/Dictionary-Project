import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h5>
        <strong>Phonetic: </strong>
        {props.phonetic}
      </h5>
    </div>
  );
}
