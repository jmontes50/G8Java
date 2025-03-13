const Info = ({ fecha }) => {
  const showInfo = (event) => {
    console.log(event)
    const date = new Date(fecha);
    alert(date.toDateString("es-ES"), { day: "numeric", month: "long" });
  };

  return (
    <>
      <time>{fecha}</time>
      <button onClick={showInfo}>Ver Info...</button>
      {/* <button onClick={() => {alert("Información!!")}}>
        Ver Info...
      </button>  */}
    </>
  );
};

export default Info;
