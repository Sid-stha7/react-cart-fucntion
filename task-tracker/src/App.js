import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/header";
import Tasks from "./components/Tasks";

function App() {
  const [addForm, SetAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dactar sita guff",
      day: "Feb 5th at 2:30pm",
      reminder: "true",
    },

    {
      id: 2,
      text: "Meeting With  Board",
      day: "Feb 5th at 2:30pm",
      reminder: "true",
    },

    {
      id: 3,
      text: "Bhandari Sita Guff Hanney",
      day: "Feb 5th at 2:30pm",
      reminder: "false",
    },
  ]);

  //add task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  ///detele tasks:
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    //here whats happening is that the taks id which will we fetch from the state of ondelete method from the task component when clicked the cross button the id of the task will be passed and this delete task is triggered and after that id is catched it will filter the array with the ids that is not euqal to the id that we got from clicking the cross button hence other than that id data is shown ,
  };

  ///toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="App">
      {/* passing props   */}
      <div className="container">
        <Header onAddForm={() => SetAddForm(!addForm)} formState={addForm} />
        {addForm && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks"
        )}
      </div>

      {/* title is props  */}
    </div>
  );
}

export default App;
