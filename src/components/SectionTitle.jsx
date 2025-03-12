const SectionTitle = ({ title }) => {
  return (
    <div className="mb-12 flex items-center justify-center  cursor-context-menu select-none ">
      <h1
        className={`px-20 py-1 rounded-lg text-mainColor   text-nowrap text-6xl font-WorkSansBlack max-md:text-4xl max-sm:text-3xl max-sm:px-10 relative`}
      >
        {title ? title : ""}
      </h1>
    </div>
  );
};
export default SectionTitle;
