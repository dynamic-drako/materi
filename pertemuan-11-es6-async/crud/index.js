let api = "https://5e8e9d60e0e7de001685f875.mockapi.io/todos"

let data = {
  todo: "Belajar data"
}

// POST
function postTodo(data){
  fetch(api, {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(data)
  })
  .then(result => result.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
postTodo(data)

// GET By ID
function getTodoByID(id){
  fetch(`https://5e8e9d60e0e7de001685f875.mockapi.io/todos/${id}`)
  .then(result => result.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
getTodoByID(6)