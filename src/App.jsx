import Counter from "./components/Counter";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        gap: "24px",
        margin: "24px",
        overflow: "hidden",
      }}>
      <div>
        <h1>Test Counter</h1>
        <Counter />
      </div>
      <div>
        <h1>Test User list</h1>
        <UserList />
      </div>
      <div>
        <h1>Test Register Form</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
