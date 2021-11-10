import React, { useEffect, useState } from "react";

import Tasks from "./Tasks/Tasks";
import NewTask from "./NewTask/NewTask";
import useHttp from "../../hooks/useHttp";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

function TaskRoute() {
  //   const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: "https://react-http-6b4a6.firebaseio.com/tasks.json" },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default TaskRoute;
