const TableData = (props) => {
  const { data, headers } = props;
  console.log(data);
  return (
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th key={i} className="border border-gray-300 p-1">
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {headers.map((head, i) => (
              // brackets notation obj.prop obj['prop']
              <td key={i} className="border border-gray-300 p-1">
                {/* preguntamos la propiedad format existe, V, aplica la transformación, si no, directamente coloca el dato */}
                { head.format ? head.format(item[head.name]) : item[head.name] }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
