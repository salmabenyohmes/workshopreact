import React, { useState } from "react";

// Exercice 1: Counter Component
const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h2>Compteur: {count}</h2>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(count - step)}>-{step}</button>
    </div>
  );
};

// Exercice 2: List Manager
const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Gestion de Liste</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={addItem}>Ajouter</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Exercice 3: Dynamic ColorBox
const ColorBox = ({ initialColor = "#000000", colorOptions = ["#ff0000", "#00ff00", "#0000ff"] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

// Exercice 4: Note Manager
const NoteManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const note = parseFloat(newNote);
    if (!isNaN(note) && note >= 0 && note <= 20) {
      setNotes([...notes, note]);
      setNewNote("");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <h2>Gestion des Notes</h2>
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Ajouter une note (0-20)"
      />
      <button onClick={addNote}>Ajouter</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Moyenne: {average}</p>
    </div>
  );
};

// Exercice 5: Todo List with Priorities
const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.name} - {task.priority}
            </span>
            <button onClick={() => toggleTaskCompletion(index)}>✓</button>
          </li>
        ))}
      </ul>
      <p>Total: {tasks.length}, Terminées: {tasks.filter((t) => t.completed).length}</p>
    </div>
  );
};

export { Counter, ListManager, ColorBox, NoteManager, TodoList };
