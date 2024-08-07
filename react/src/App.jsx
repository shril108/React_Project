import {useState, useEffect} from 'react';
import {getAll, get, deleteById, post, put} from './memdb';
import {CustomerList} from './components/CustomerList';
import { CustomerAddUpdateForm } from './components/CustomerAddUpdateForm';

function App() {
  
  const [selectedRow, setSelectedRow] = useState(-1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [customers, setCustomers] = useState([]);


  
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


  useEffect(getCustomers);

  return (
    <div className = "temp">
    <CustomerList 
    customers={customers}
    name={name}
    email={email}
    pass={pass}
    selectedRow={selectedRow}
    setName={setName}
    setPass={setPass}
    setEmail={setEmail}
    setSelectedRow={setSelectedRow}/>
      <div className = "updates">
        <CustomerAddUpdateForm
        name={name}
        email={email}
        pass={pass}
        selectedRow={selectedRow}
        handleInputChange={handleInputChange}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleCancel={handleCancel}/>
      </div>
    </div>
      
  )
}

export default App
