import React, { useEffect } from "react";

export default function List({ numbersList }) {
  useEffect(() => {
    console.log("Number List Updated!");
  }, [numbersList]);

  return (
    <ul>
      {numbersList.map((item, index) => (
        <li key={`number-${index}`}>{item}</li>
      ))}
    </ul>
  );
}
