import React from "react";
import { NavLink } from "react-router-dom";

function FrozenNestedNavigat() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 max-sm:flex-col">
        <li>
          <NavLink
            className={`w-64 h-72 py-3 flex flex-col items-center justify-between text-center bg-green-900 text-white text-xl font-WorkSansSemiBold rounded-md capitalize text-nowrap hover:bg-green-800 `}
            to="/products/frozen/frozen-fruits"
          >
            <img
              src={`https://res.cloudinary.com/dkhu7rt8n/image/upload/v1741762140/greenPhoenix/pngwing.com_10_hvic2s.png`}
              alt=""
            />
            <p>Frozen fruits</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`w-64 h-72 py-3 flex flex-col items-center justify-between text-center bg-green-900 text-white text-xl font-WorkSansSemiBold rounded-md capitalize text-nowrap hover:bg-green-800 `}
            to="/products/frozen/frozen-vegetables"
          >
            <img
              src={`https://res.cloudinary.com/dkhu7rt8n/image/upload/v1741762140/greenPhoenix/pngwing.com_9_ttcu5b.png`}
              alt=""
            />
            <p>Frozen vegetables</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FrozenNestedNavigat;
