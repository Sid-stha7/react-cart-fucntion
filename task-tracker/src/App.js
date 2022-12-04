import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: "true",
    },

    {
      id: 2,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: "true",
    },

    {
      id: 3,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: "false",
    },
  ]);
  return (
    <div className="App">
      {/* passing props   */}
      <div className="container">
        <Header />
        <Tasks tasks={tasks} />
      </div>

      {/* title is props  */}
    </div>
  );
}

export default App;
