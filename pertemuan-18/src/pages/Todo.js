import axios from 'axios'
import {useState,useEffect} from 'react'

function Todo() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    axios.get("https://5e8e9d60e0e7de001685f875.mockapi.io/todos")
    .then(result => setTodos(result.data))
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("https://5e8e9d60e0e7de001685f875.mockapi.io/todos", {todo: input})
    .then(result => {
      console.log(result)
      setTodos([...todos, result.data])
    })
    .catch(err => console.log(err))

    setInput("")
  }

  const handleDelete = (e, item) => {
    e.preventDefault()
    console.log(item);

    axios.delete(`https://5e8e9d60e0e7de001685f875.mockapi.io/todos/${item.id}`)
    .then(result => {
      console.log(result)
      let finalData = todos.filter(value => value.id != item.id)
      setTodos(finalData)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="txtTodo" value={input} onChange={handleChange}/>
        <button>OK</button>
      </form>
      <ul>
        {todos.map((item,index) => (
          <li key={index}>
            <span>{item.todo}</span>
            <button onClick={(e) => handleDelete(e, item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo