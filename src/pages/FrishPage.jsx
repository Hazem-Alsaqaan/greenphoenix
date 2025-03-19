import React, { useEffect } from "react";
import FrishNestedNavigat from "../components/frishNestedNavigat/FrishNestedNavigat";

function FrishPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen px-24 py-44 bg-white max-md:px-6 relative">
      <FrishNestedNavigat />
    </div>
  );
}

export default FrishPage;
