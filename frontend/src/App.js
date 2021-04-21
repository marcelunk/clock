import "./App.css";
import Clock from "./components/Clock";
import Buttons from "./components/Buttons";
import Germany from "./components/Germany";
import NewYork from "./components/NewYork";
import AddOne from "./components/AddOne";

function App() {
  return (
    <div className="grid">
      <Clock />
      <NewYork />
      <Germany />
      <AddOne />
    </div>
  )
}

export default App;
