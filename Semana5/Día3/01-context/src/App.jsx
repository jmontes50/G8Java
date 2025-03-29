import { NumberContextProvider } from "./context/NumberContext";
import Section from "./Section";
import Show from "./Show";

const App = () => {
  return (
    <NumberContextProvider>
      <div>
        <h1>App</h1>
        <hr />
        <Section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            accusamus totam omnis quibusdam tenetur sed? Nihil a nesciunt
            facilis quo sunt vitae eos? Assumenda ullam dolorem, deserunt quis
            explicabo aut?
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20bzAGgzPiXiWN4Vwk0YpoTchfZ1E-gRMdw&s"
            alt="..."
          />
          <button>Hola!</button>
        </Section>
      </div>
      <hr />
      <Show />
      {/* rutas */}
    </NumberContextProvider>
  );
};

export default App;
