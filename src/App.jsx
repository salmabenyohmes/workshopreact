import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>Exercices React</h1>
      <Counter initialCount={0} step={1} />
      <ListManager initialItems={["React", "Angular", "VueJs"]} placeholder="Ajouter un framework..." />
      <ColorBox initialColor="#ff5733" colorOptions={["#ff5733", "#33ff57", "#3357ff"]} />
      <NoteManager initialNotes={[12, 15, 18]} />
      <TodoList initialTasks={[{ name: "Faire les courses", priority: "Haute", completed: false }]} />
    </div>
    /*<>
      <div>
        <ClassComponent name ="salma"/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
  )
  
}

export default App
