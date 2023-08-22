import { useState } from 'react';
import './assets/css/App.css';

import { Resume } from './components/Resume';
import { TodoList } from './components/TodoList';

function App() {
  const TODOS_MOCK = [
    { text: 'Create a todo app', completed: true },
    { text: 'Style it', completed: false },
    { text: 'Make it interactive', completed: false },
    { text: 'Deploy test', completed: false },
    { text: 'Prepare to github', completed: false },
  ];

  const [todos, setTodos] = useState(TODOS_MOCK);

  const getTotalTodos = () => todos.length
  const getTotalCompletedTodos = () => {
    return todos.filter(todo => !!todo.completed).length;
  }

  console.log('getTotalTodos', getTotalTodos)

  return (
    <>
      <div className="App">
        <div className="container-app">
          <h3>TODO App</h3>

          <Resume completedTodos={getTotalCompletedTodos()} totalTodos={getTotalTodos()} />


          <div className="container-input">
            <input type="text" placeholder="Add a new todo..." />
          </div>

          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
