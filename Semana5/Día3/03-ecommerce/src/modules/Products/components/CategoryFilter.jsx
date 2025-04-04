import useGetAxios from "../../../hooks/useGetAxios";
import Loading from "../../ui/components/Loading";

const CategoryFilter = () => {
  const { data, loading, error } = useGetAxios(
    "https://json-server-vercel-eosin-tau.vercel.app/categories"
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    <p>Error, vuelva a intentar y/ó comuniquese con soporte...</p>;
  }

  return (
    <div className="col-span-full">
      <details className="dropdown">
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {data
            ? data.map((category) => (
                <li key={category.id} className="mb-1">
                  <button className="btn btn-sm rounded">
                    {category.nombre}
                  </button>
                </li>
              ))
            : null}
        </ul>
      </details>
    </div>
  );
};

export default CategoryFilter;
