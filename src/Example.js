import React from "react";
import "./Meaning.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong>Example:</strong> {props.example}
      </div>
    );
  } else {
    return null;
  }
}
