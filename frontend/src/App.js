import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import Germany from "./components/Germany";
import NewYork from "./components/NewYork";
import AddOne from "./components/AddOne";

function App() {
  return (
    <div className="grid">
      <Clock />
      <Button display="NY" />
      <Button display="D" />
      <Button display="1+" />
    </div>
  )
}

export default App;
