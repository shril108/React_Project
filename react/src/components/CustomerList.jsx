import {useState, useEffect} from 'react';

export function CustomerList(props){
    const{
        customers,
        name,
        email,
        pass,
        selectedRow,
        setName,
        setPass,
        setEmail,
        setSelectedRow
    } = props


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
      }

    return(
        <div className = "listing">
        <h3>Shril's Customer List</h3>
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
    )
}