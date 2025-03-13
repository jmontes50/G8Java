import Parrafo from "./Parrafo";
//Podemos importar css o cualquier otro archivo para ser utilizado, pero en el caso de importar CSS este será utilizado en cualquier parte del proyecto
import "./App.css";
//La función del componente tiene que estar nombrada iniciando con Mayúsculas
const App = () => {
  const titulo = "Hello React!!";

  //Todo componente tiene que retornar jsx (su extensión tiene que ser .jsx)
  //y lo que retornemos es lo que se va a renderizar en la app
  return (
    //SOLAMENTE se puede retornar 01 elemento en el JSX
    //<></> Fragment
    <>
      <header className="heading">
        {/* En JSX Si necesitamos referenciar o usar JS, basta con abrir {} y escribir dentro nuestro código de js */}
        <h1>{titulo}</h1>
      </header>
      <main>
        <h2>Título</h2>
        <section>
          {/* Para indicar algunos atributos con nombres iguales a los de html y js, se utilizando nombres diferentes */}
          <label htmlFor="correo">Correo:</label>
          {/* toda etiqueta tiene que tener su cierre o autocierre */}
          <input type="email" id="correo" />
        </section>
        <section>
          <p>Lorem ipsum dolor sit. {100 + 900}</p>
          <Parrafo texto="TS Cambio para Script" fecha="12/03/25"/>
          <Parrafo texto="Soy Dalto" fecha="11/03/25"/>
          <Parrafo texto="I'm Still Standing" fecha="09/03/25"/>
        </section>
      </main>
    </>
  )
}

//Esto tiene que ser exportado
export default App;