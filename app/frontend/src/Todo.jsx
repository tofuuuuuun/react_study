import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from './components/incompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText == "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onReturnTodo = (index) => {
    const newReturnTodos = [...completeTodos];
    newReturnTodos.splice(index, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newReturnTodos);
  }

  const isMax = incompleteTodos.length >= 5
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disbled={isMax} />
      {isMax && (
        <p style={{ color: "red" }}>タスク消化しろ！</p>
      )}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos completeTodos={completeTodos} onReturnTodo={onReturnTodo} />
    </>
  )
}