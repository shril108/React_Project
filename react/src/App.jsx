import {useState, useEffect} from 'react';
import {getAll, get, deleteById, post, put} from './memdb';

function App() {
  let users = [
    {
      "id": 0,
      "Name": 'Jack Jackson',
      "Email": 'jackj@abc.com',
      "Pass": 'jackj',
    },
    {
      "id": 1,
      "Name": 'Katie Kates',
      "Email": 'katiek@abc.com',
      "Pass": 'katiek',
    },
    {
      "id": 2,
      "Name": 'Glen Glens',
      "Email": 'gleng@abc.com',
      "Pass": 'gleng',
    }
]
  
  const [selectedRow, setSelectedRow] = useState(-1);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [customers, setCustomers] = useState([]);
  let mode = "";

  const handleDelete = (row) =>{
    if(row >= 0){
      deleteById(row);
      setName("");
      setEmail("");
      setPass("");
      setSelectedRow(-2);
    }
    else{
      Continue; 
    }
  } 

  const handleSave = () =>{
    console.log("save clicked");
  } 

  const handleCancel = () =>{
    setSelectedRow(-2);
    setName("");
    setEmail("");
    setPass("");
  } 

  const getCustomers = function(){
    let data = getAll();
    setCustomers(data);
  }

  const handleList = (id) =>{
    if(selectedRow === id){
      setSelectedRow(-1);
      setName("Customer Name");
      setEmail("name@company.com");
      setPass("password");
    }
    else{
      setSelectedRow(id);
      setName(customers[id]["name"]);
      setEmail(customers[id]["email"]);
      setPass(customers[id]["password"]);
      // console.log(name, email, pass);
    }
    if(selectedRow === -1){
      setName(customers[id]["name"]);
      setEmail(customers[id]["email"]);
      setPass(customers[id]["password"]);
    }
    // console.log(selectedRow, id);
  }

  useEffect(getCustomers);


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
      {customers.map((customer, index) => (
        <tr key = {index} onClick = {() => handleList(index)} style = {
          {
            cursor: 'pointer'
          }
        }>
          <th style={{fontWeight: selectedRow === index ? 'bold' : 'normal'}}>{customer.name}</th>
          <th style={{fontWeight: selectedRow === index ? 'bold' : 'normal'}}>{customer.email}</th>
          <th style={{fontWeight: selectedRow === index ? 'bold' : 'normal'}}>{customer.password}</th>
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
          <input placeholder={name}></input>
        </th>
      </tr>

      <tr>
        <th>Email: </th>
        <th>
          <input placeholder={email}></input>
        </th>
      </tr>

      <tr>
        <th>Pass: </th>
        <th>
          <input placeholder={pass}></input>
        </th>
      </tr>
      </tbody>
    </table>
    </div>

    <button onClick = {() => handleDelete(selectedRow)}>Delete</button>
    <button onClick = {handleSave}>Save</button>
    <button onClick = {handleCancel}>Cancel</button>
      
    </div>
  )
}

export default App
