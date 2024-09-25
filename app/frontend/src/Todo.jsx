import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["todoです1", "todoです2"]);
  const [completeTodos, setCompleteTodos] = useState(["done1", "done2"]);
  return (
    <>
      <div className='input-area'>
        <input placeholder='todoを入力'></input>
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((complete) => (
            <li key={complete}>
              <div className='list-row'>
                <p className='todo-item'>{complete}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
