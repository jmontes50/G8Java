// const Parrafo = (props) => {
//   console.table(props)
//   return (
//     <p>{props.texto} - {props.fecha}</p>
//   )
// }

const Parrafo = ({texto, fecha}) => {
  return (
    <p>{texto} - {fecha}</p>
  )
}

export default Parrafo;