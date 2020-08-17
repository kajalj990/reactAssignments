import React from "react";
import TableClass from "./components/TableClass";
//import TableClass from "./components/TableClass";
var data = [
  {
    id: 1,
    name: "Kajal",
    Job: "Janitor"
  },
  {
    id: 2,
    name: "Palak",
    Job: "Bouncer"
  },
  {
    id: 3,
    name: "Shivani",
    Job: "Aspiring actress"
  },
  {
    id: 4,
    name: "Pradnya",
    Job: "Bartender"
  }
];
function App() {
  return (
    <div className="App">
      <TableClass data={data} />
    </div>
  );
}

export default App;
