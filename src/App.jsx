import Counter from "./components/Counter";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";
import "./index.css";

function App() {
  return (
    <div className="flex w-screen justify-around">
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
