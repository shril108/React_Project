export function CustomerAddUpdateForm(props){
   const {
    selectedRow,
    name,
    email,
    pass,
    handleInputChange,
    handleDelete,
    handleSave,
    handleCancel
   } = props
   
    return(
        <div>
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