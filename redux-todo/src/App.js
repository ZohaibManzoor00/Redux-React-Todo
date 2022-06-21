import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './actions'
import { useState, useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  // const todoList = useSelector(state => state.todoList)
  const [listFromDB, setListFromDB] = useState([])

  function handleClick(e) {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  useEffect(() => {
    fetch('http://localhost:8000/todos')
    .then(res => res.json())
    .then(data => setListFromDB(data))
  }, [])
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form type="submit" placeholder='Enter task'>
        <textarea onChange={(e) => setInput(e.target.value)}></textarea>
        <button onClick={(e) => handleClick(e)}>Submit</button>
      </form>
        <>
          <ul>
            {listFromDB.map(todo => (
              <div key={todo.id}>
                <li>{todo.description}{" "}<button>Delete</button>{" "}<button>Mark Complete</button></li>
              </div>
            ))}
          </ul>
        </>
    </div>
  );
}

export default App;
