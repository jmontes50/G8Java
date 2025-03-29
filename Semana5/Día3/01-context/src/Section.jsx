const Section = (props) => {
  console.log(props);

  return (
    <section>
      <h2>Section</h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        odio!
      </h4>
      <hr />
      <div>
        { props.children }
      </div>
    </section>
  );
};

export default Section;
