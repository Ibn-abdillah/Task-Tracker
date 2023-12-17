import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask , handleDelete} from "../redux/taskSlice";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          setTasks(storedList);
      }
  },[])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
      const deleted = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleted);
      localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem("localTasks");
      addTask(task)
  }

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <small>Todo app is an application specially built to keep track of errands or tasks that need to be done. </small>

      <div className="input-field">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task here..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => dispatch(addTask(addTask))}>
          add
        </button>
      </div>
       
      <h4 className="completed-task">
        You have
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks`
          : null} completed
      </h4>

      {tasks.map((task) => (
        <React.Fragment key={task.id}>
            <div className="todo">
                <span>
                    {task.title}
                </span>
           
                <button
                onClick ={()=> dispatch(handleDelete(task))}
                >delete</button>
            </div>
        </React.Fragment>
      ))}

      {!tasks.length ? null:(
          <div>
              <button onClick={()=> handleClear()}>
                  Clear
              </button>
          </div>
      )}
    </div>
  );
}