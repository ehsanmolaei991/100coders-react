import useApi from "../hooks/useApi";
import useDark from "../hooks/useDark";

export default function CustomHook() {
  const { loading, data } = useApi("/users");
  const [mode, toggleMode] = useDark();

  return (
    <div>
      {loading && <p>loading ....</p>}

      {!loading &&
        data.map((item) => {
          return (
            <p
              style={{
                backgroundColor: mode ? "#0f0f0f" : "#ffffff",
                color: !mode ? "#0f0f0f" : "#ffffff",
              }}
              key={item.id}
            >
              {item.name}
            </p>
          );
        })}

      {/*  */}
      <p>current: {`${mode}`}</p>
      <button onClick={toggleMode}>ChangeMode</button>
    </div>
  );
}
