import React from "react";
import { NavLink } from "react-router-dom";

function FrozenNestedNavigat() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 max-sm:flex-col">
        <li>
          <NavLink
            className={`block w-64 py-3 text-center bg-green-900 text-white text-xl font-WorkSansSemiBold rounded-md capitalize text-nowrap hover:bg-green-800 `}
            to="frozen-fruits"
          >
            Frozen fruits
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`block w-64 py-3 text-center bg-green-900 text-white text-xl font-WorkSansSemiBold rounded-md capitalize text-nowrap hover:bg-green-800 `}
            to="frozen-vegetables"
          >
            Frozen vegetables
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FrozenNestedNavigat;
