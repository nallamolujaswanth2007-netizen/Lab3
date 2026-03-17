import Navbar from "./components/layout/Navbar";
import UserList from "./components/user/UserList";
import "./styles/global.css";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <UserList />
    </div>
  );
};

export default App;
