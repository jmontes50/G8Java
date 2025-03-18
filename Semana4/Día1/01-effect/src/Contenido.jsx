import { useState, useEffect } from "react";

const Contenido = () => {
  console.log("1. estoy en la función");
  const [users, setUsers] = useState([]);
  const mostrar = true;

  useEffect(() => {
    console.log("3. estoy en el useEffect");
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((datos) => {
        // console.log(datos)
        setUsers(datos.data);
      });
  }, []);

  return (
    <div>
      {console.log("2. estoy en el jsx/return")}

      {/* {console.log(users)} */}
      {/* renderizado condicional, mediante un operador ternario */}
      {mostrar ? <h3>Lista de Usuarios</h3> : null}
      <ul>
        {/* renderizado de listas */}
        {/* {users.map((item, index) => {
            return (<li key={index}>{item.first_name}</li>);
          })} */}
        {users.map((item) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contenido;
