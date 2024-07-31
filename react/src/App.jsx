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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [customers, setCustomers] = useState([]);
  let mode = "";


  const handleInputChange = function(event, thing) {
    if(thing === "name"){
      setName(event.target.value);
    }
    else if(thing === "email"){
      setEmail(event.target.value);
    }
    else{
      setPass(event.target.value);
    }
  }

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
    let current = {
      "id": -3,
      "name": name,
      "email": email,
      "password": pass
    };
    if(selectedRow == -1 || selectedRow == -2){
      post(current);
      console.log(current);
    }
    else{
      put(selectedRow, current);
    }
    setSelectedRow(-2);
    setName("");
    setEmail("");
    setPass("");
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
      setName("");
      setEmail("");
      setPass("");
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
  // console.log(mode);

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
    {/* name == "Customer Name" ? 'Add' : name == "" ? 'Add' : 'Update' */}
    <div className = "updates">
    <h3>Mode: {selectedRow == -1 ? 'Add' : selectedRow == -2 ? 'Add' : 'Update'}</h3>
    <table>

      <tbody>
      <tr>
        <th>Name: </th>
        <th>
          <input 
          value={name} 
          placeholder="Customer Name"
          onChange={(e) => handleInputChange(e, "name")}></input>
        </th>
      </tr>

      <tr>
        <th>Email: </th>
        <th>
          <input value={email} 
          placeholder="customer@abc.com"
          onChange={(e) => handleInputChange(e, "email")}></input>
        </th>
      </tr>

      <tr>
        <th>Pass: </th>
        <th>
          <input value={pass}
          placeholder="pass"
          onChange={(e) => handleInputChange(e, "pass")}></input>
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
