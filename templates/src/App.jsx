import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project report",
      description: "Finish and submit the report for the ongoing project.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Attend team meeting",
      description: "Participate in the weekly team meeting.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Submit timesheet",
      description: "Log hours for the week and submit the timesheet.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Doctor appointment",
      description: "Visit the doctor for a routine check-up.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Review new proposals",
      description: "Look over the new project proposals.",
      isCompleted: true,
    },
    {
      id: 6,
      title: "Grocery shopping",
      description: "Buy groceries for the week.",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Renew subscription",
      description: "Renew the monthly subscription for online services.",
      isCompleted: true,
    },
    {
      id: 8,
      title: "Plan weekend trip",
      description: "Organize and finalize the trip plans for the weekend.",
      isCompleted: false,
    },
    {
      id: 9,
      title: "Call plumber",
      description: "Schedule a plumber to fix the leaking sink.",
      isCompleted: false,
    },
    {
      id: 10,
      title: "Prepare presentation",
      description: "Create slides and notes for the upcoming presentation.",
      isCompleted: true,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // se id igual atualiza tarefa
        return { ...task, isCompleted: !task.isCompleted };
      }
      // else - se pasar não atualiza tarefa
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className=" text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
