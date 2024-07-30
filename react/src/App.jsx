import {useState} from 'react';


function App() {

  const [bold, setBold] = useState('false');

  const handleDelete = () =>{
    console.log("delete clicked");
  } 

  const handleSave = () =>{
    console.log("save clicked");
  } 

  const handleCancel = () =>{
    console.log("cancel clicked");
  } 

  const handleList = (ele) =>{
    setBold(true);
  }

  let users = [
    {
      "Name": 'Jack Jackson',
      "Email": 'jackj@abc.com',
      "Pass": 'jackj',
      bolded: bold
    },
    {
      "Name": 'Katie Kates',
      "Email": 'katiek@abc.com',
      "Pass": 'katiek',
      bolded: bold
    },
    {
      "Name": 'Glen Glens',
      "Email": 'gleng@abc.com',
      "Pass": 'gleng',
      bolded: bold
    }
]


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
      {users.map((user, index) => (
        <tr key = {index} onClick = {handleList}>
          <th>{user.Name}</th>
          <th>{user.Email}</th>
          <th>{user.Pass}</th>
        </tr>
      ))}
      </tbody>

    </table>
    </div>

    <div className = "updates">
    <h3>Update</h3>
    <table>

      <tbody>
      <tr>
        <th>Name: </th>
        <th>
          <input></input>
        </th>
      </tr>

      <tr>
        <th>Email: </th>
        <th>
          <input></input>
        </th>
      </tr>

      <tr>
        <th>Pass: </th>
        <th>
          <input></input>
        </th>
      </tr>
      </tbody>
    </table>
    </div>

    <button onClick = {handleDelete}>Delete</button>
    <button onClick = {handleSave}>Save</button>
    <button onClick = {handleCancel}>Cancel</button>
      
    </div>
  )
}

export default App
