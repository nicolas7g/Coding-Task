import "./App.css";
import AvgScreen from "./AvgScreen";

function App() {
  const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: null },
    { name: "Charlie", age: 40 },
    { name: "David", age: 35 },
  ];

  let filteredData = data.filter((obj) => obj.age != null);

  return (
    <div className="App">
      <AvgScreen data={filteredData} />
    </div>
  );
}

export default App;
