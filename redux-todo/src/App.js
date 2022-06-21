import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
