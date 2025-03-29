import { useContext } from "react";
import { NumberContext } from "./context/NumberContext";

const Section = (props) => {
  // console.log(props);
  const { hoy, pi } = useContext(NumberContext);

  console.log(hoy)

  console.log(pi);

  return (
    <section>
      <h2>Section</h2>
      <h4>
        { hoy }
      </h4>
      <hr />
      <div>
        { props.children }
      </div>
    </section>
  );
};

export default Section;
