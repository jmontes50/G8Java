import icons from "../data/icons";

const TableData = (props) => {
  const { data, headers, actions } = props;
  // console.log(data);
  return (
    <table className="border-collapse border-t-2 border-gray-800 px-4 py-2 w-full table-auto">
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th key={i} className="border-t-2 border-gray-800 px-4 py-2 prose">
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
              <td
                key={i}
                className="border-t-2 border-gray-800 px-4 py-2 prose"
              >
                {/* preguntamos la propiedad format existe, V, aplica la transformación, si no, directamente coloca el dato */}
                {head.format ? head.format(item[head.name]) : item[head.name]}
              </td>
            ))}
            {actions
              ? actions.map((act, i) => (
                  <td
                    key={i}
                    className="border-t-2 border-gray-800 px-4 py-2 prose"
                  >
                    <button
                      className={`btn btn-${
                        act.bgColor ? act.bgColor : "neutral"
                      } btn-sm`}
                      onClick={() => {
                        act.action(item.id);
                      }}
                    >
                      <i className={icons[act.icon]}></i>
                    </button>
                  </td>
                ))
              : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
