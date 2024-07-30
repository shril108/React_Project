
function App() {

  const handleDelete = () =>{
    console.log("delete clicked");
  } 

  const handleSave = () =>{
    console.log("save clicked");
  } 

  const handleCancel = () =>{
    console.log("cancel clicked");
  } 

  const handleList = () =>{
    console.log("list item clicked");
  }


  return (
    <div className = "temp">
    <div className = "listing">
    <h3>Customer List</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
        </tr>
      </thead>

      <tbody>
      <tr onClick = {handleList}>
        <th>Jack Jackson</th>
        <th>jackj@abc.com</th>
        <th>jackj</th>
      </tr>

      <tr onClick = {handleList}>
        <th>Katie Kates</th>
        <th>katiek@abc.com</th>
        <th>katiek</th>
      </tr>

      <tr onClick = {handleList}>
        <th>Glen Glens</th>
        <th>gleng@abc.com</th>
        <th>gleng</th>
      </tr>
      </tbody>

    </table>
    </div>

    <div className = "updates">
    <h3>Update</h3>
    <table>
      <tr>
      <th>Name: </th>
      <th>
        <input></input>
      </th>
      </tr>

      <label>Email: </label>
      <input></input>

      <label>Pass: </label>
      <input></input>
    </table>
    </div>

    <button onClick = {handleDelete}>Delete</button>
    <button onClick = {handleSave}>Save</button>
    <button onClick = {handleCancel}>Cancel</button>
      
    </div>
  )
}

export default App
