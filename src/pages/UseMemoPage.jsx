import React, { useState, useEffect, useMemo } from "react";

function generateNumberSlow(number) {
  console.log("Slow Funtion Running!");
  for (let index = 0; index < 1000000000; index++) {}
  return number * 2;
}

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Without Memo
  const slowNumber = generateNumberSlow(number);

  // With Memo
  // const slowNumber = useMemo(() => generateNumberSlow(number), [number]);

  // const theme = {
  //   backgroundColor: dark ? "#000" : "#fff",
  //   color: dark ? "#fff" : "#000",
  // };

  const ele = <h1>Antony</h1>;

  // const theme = useMemo(() => {
  //   return {
  //     backgroundColor: dark ? "#000" : "#fff",
  //     color: dark ? "#fff" : "#000",
  //   };
  // }, [dark]);

  useEffect(() => {
    console.log("Theme Changed!");
  }, [theme]);

  return (
    <div style={theme}>
      <p>{slowNumber}</p>
      {ele}
      <button onClick={() => setNumber(number + 1)}>Plus number</button>
      {/*  */}
      <button onClick={() => setDark(!dark)}>ToggleMode</button>
    </div>
  );
}
