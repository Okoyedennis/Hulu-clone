import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import requests from "./component/requests";
import Result from "./component/Result";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
