import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/actions/authActions";
import { increment, decrement, reset } from "./redux/actions/counterActions";
import { toggleTheme } from "./redux/actions/themeActions";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const count = useSelector((state) => state.counter.value);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h1>Redux Counter with Auth & Theme</h1>
      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login("User123"))}>Login</button>
      )}
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default App;
