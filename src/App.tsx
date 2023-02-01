import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TodoListsType = {
  id: string
  title: string
  filter: FilterValuesType
}
export type FilterValuesType = "all" | "active" | "completed";

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });

  function removeTodoList(todolistID: string) {
    setTodoLists(todoLists.filter(el => el.id !== todolistID))
    delete tasks[todolistID]
  }

  function removeTask(todolistID: string, id: string) {
    setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== id)})
  }

  function addTask(todolistID: string, title: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
    setTasks({
      ...tasks, [todolistID]: tasks[todolistID].map(el =>
        el.id === taskId
          ? {...el, isDone: isDone} // если совпадает то, что в параметрах и в ключе, то можно просто isDone без isDone: isDone
          : el)
    })
  }

  function changeFilter(todolistID: string, value: FilterValuesType) {
    setTodoLists(todoLists.map(el =>
      el.id === todolistID
        ? {...el, filter: value}
        : el))
  }

  return (
    <div className="App">
      {todoLists.map(tl => {
        let tasksForTodolist = tasks[tl.id]

        if (tl.filter === "active") {
          tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
        }
        if (tl.filter === "completed") {
          tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
        }

        return <Todolist
          key={tl.id}
          title={tl.title}
          todoListID={tl.id}
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeStatus}
          filter={tl.filter}
          removeTodoList={removeTodoList}
        />
      })}
    </div>
  );
}

export default App;
