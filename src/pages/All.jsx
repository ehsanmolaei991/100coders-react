import React, { useState, memo, useMemo, useCallback } from "react";

export default function All() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(false);

  console.count(`Rendered`);

  const newColor = color ? { color: "red" } : { color: "blue" };

  // const newColor = useMemo(
  //   () => (color ? { color: "red" } : { color: "blue" }),
  //   [color]
  // );

  // const onClick = () => {};

  // const onClick = useCallback(() => console.log("Hi From Callback"), []);

  return (
    <div>
      <p>App Rendered {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>Plus Counter</button>

      <hr />

      {/*  */}
      {/* <Cube color={color ? "red" : "blue"} /> */}
      {/* <MemoCube color={color ? "red" : "blue"} /> */}
      <MemoCube
        // onClick={onClick}
        //
        color={newColor}
      />

      {/*  */}
      <button onClick={() => setColor(!color)}>Change Color</button>
    </div>
  );
}

// --------------------------------------------------------------

function Cube({ color = "blue", onClick }) {
  console.log("Cube Rendered ....!");
  return (
    <div
      style={{
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: color.color,
        // backgroundColor: color,
      }}
      onClick={onClick}
    />
  );
}

// const MemoCube = memo(Cube);
const MemoCube = memo(Cube, (prevProps, nextProps) => {
  return prevProps.color.color === nextProps.color.color;
});
