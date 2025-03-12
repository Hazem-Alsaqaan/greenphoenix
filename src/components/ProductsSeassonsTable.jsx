import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiFrozenOrb } from "react-icons/gi";

function ProductsSeassonsTable({ product }) {
  return (
    <div className="w-20 h-20 capitalize rounded-full bg-white shadow-lg  flex flex-col items-center justify-center gap-1 max-sm:w-16 max-sm:h-16">
      <p className="text-black  max-sm:text-sm">{product.month}</p>
      {product.value === "frish" ? (
        <IoCheckmarkSharp className="text-3xl max-sm:text-xl text-mainColor" />
      ) : product.value === "none" ? (
        <FaXmark className="text-3xl max-sm:text-xl text-mainColor" />
      ) : (
        <GiFrozenOrb className="text-3xl max-sm:text-xl text-mainColor" />
      )}
    </div>
  );
}

export default ProductsSeassonsTable;
