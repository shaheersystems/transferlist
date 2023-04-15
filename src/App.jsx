import "./App.css";
import ListItem from "./components/ListItem";
import { useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import EmptyState from "./components/EmptyState";
function App() {
  const todos = [
    {
      id: 1,
      title: "Design Layout",
      description: "Design layout for the website",
      date: "2021-09-01",
      status: "todo",
    },
    {
      id: 3,
      title: "Deploy",
      description: "Deploy the website",
      date: "2021-09-01",
      status: "todo",
    },

    {
      id: 5,
      title: "Launch",
      description: "Launch the website",
      date: "2021-09-01",
      status: "todo",
    },
  ];
  const doings = [
    {
      id: 2,
      title: "Api Integration",
      description: "Integrate api for the website",
      date: "2021-09-01",
      status: "doing",
    },
    {
      id: 4,
      title: "Test",
      description: "Test the website",
      date: "2021-09-01",
      status: "doing",
    },
    {
      id: 6,
      title: "Maintenance",
      description: "Maintain the website",
      date: "2021-09-01",
      status: "doing",
    },
  ];
  const [todoTasks, setTodoTasks] = useState(todos);
  const [doingTasks, setDoingTasks] = useState(doings);
  const changeStatus = (task, status) => {
    let changedTask = { ...task, status: status };
    changedTask.status = status;
    return changedTask;
  };
  const transferToTodo = (id) => {
    const [filteredItem] = doingTasks.filter((doing) => doing.id === id);
    let transferItem = changeStatus(filteredItem, "todo");
    setTodoTasks([...todoTasks, transferItem]);
    let newDoings = doingTasks.filter((doing) => doing.id !== id);
    setDoingTasks(newDoings);
  };
  const transferToDoing = (id) => {
    const [filteredItem] = todoTasks.filter((todo) => todo.id === id);
    let transferItem = changeStatus(filteredItem, "doing");
    setDoingTasks([...doingTasks, transferItem]);
    let newTodos = todoTasks.filter((todo) => todo.id !== id);
    setTodoTasks(newTodos);
  };
  return (
    <div className='App'>
      <div className='max-w-4xl m-auto py-10 flex gap-4 items-center flex-wrap'>
        <div className='flex-1 rounded bg-gray-100 p-3 space-y-3'>
          <h1 className='text-sm font-semibold'>Todo</h1>
          <div className='flex flex-col gap-2'>
            {todoTasks.length === 0 && <EmptyState />}
            {todoTasks?.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  {...todo}
                  onClick={() => transferToDoing(todo.id)}
                />
              );
            })}
          </div>
        </div>
        <div className='flex-1 rounded bg-gray-100 p-3 space-y-3'>
          <h1 className='text-sm font-semibold'>Doing</h1>
          <div className='flex flex-col gap-2'>
            {doingTasks.length === 0 && <EmptyState />}
            {doingTasks?.map((doing) => {
              return (
                <ListItem
                  key={doing.id}
                  {...doing}
                  onClick={() => transferToTodo(doing.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
