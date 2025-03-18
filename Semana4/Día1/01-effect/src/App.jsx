import { useState, useEffect } from "react";

const App = () => {
  console.log("1. estoy en la función")

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("3. estoy en el useEffect");
    fetch('https://reqres.in/api/users?page=2')
    .then((res) => res.json())
    .then((datos => {
      // console.log(datos)
      setUsers(datos.data);
    }));
  },[])

  return (
    <div>
      App
      {console.log("2. estoy en el jsx/return")}
      {/* renderizado de listas */}
      {/* {console.log(users)} */}
      <ul>
        {/* {users.map((item, index) => {
          return (<li key={index}>{item.first_name}</li>);
        })} */}
        {users.map((item) => (<li key={item.id}>{item.first_name}</li>))}
      </ul>
    </div>
  )
}

export default App