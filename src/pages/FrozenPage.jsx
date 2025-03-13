import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import FrozenNestedNavigat from "../components/frozenNestedNavigat/FrozenNestedNavigat";

function FrozenPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
      <FrozenNestedNavigat />
      <Outlet />
    </div>
  );
}

export default FrozenPage;
