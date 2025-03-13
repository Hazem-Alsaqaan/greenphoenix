import React from "react";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <div className="flex-1 flex flex-col py-10 pl-5 max-md:pl-0">
      <h1 className="text-mainColor font-PoppinsBlack text-2xl">Quick Links</h1>
      <nav className="pt-5">
        <ul className={`flex flex-col gap-2`}>
          <li className="w-full">
            <Link
              to="/"
              className={`block w-full text-xl text-white hover:text-neutral-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={` block w-full text-xl text-white hover:text-neutral-300`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={` block w-full text-xl text-white hover:text-neutral-300`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={` block w-full text-xl text-white hover:text-neutral-300`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={` block w-full text-xl text-white hover:text-neutral-300 text-nowrap`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default QuickLinks;
