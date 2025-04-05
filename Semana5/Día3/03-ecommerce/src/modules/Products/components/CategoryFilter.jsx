import { useEffect } from "react";
import useCategoryStore from "../../../stores/useCategoryStore";

const CategoryFilter = () => {
  const { categories, categorySelected, setCategorySelected, requestCategories } = useCategoryStore();

  useEffect(() => {
    requestCategories();
  }, [])

  return (
    <div className="col-span-full">
      <details className="dropdown">
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {categories.length !== 0
            ? categories.map((category) => (
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
