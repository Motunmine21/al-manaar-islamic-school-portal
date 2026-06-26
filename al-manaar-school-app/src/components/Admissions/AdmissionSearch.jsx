function AdmissionSearch({
  search,
  setSearch,
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by parent, student, class, email or phone..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          lg:w-1/2
          p-3
          border
          border-gray-300
          rounded-lg
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-gold
          focus:border-gold
        "
      />
    </div>
  );
}

export default AdmissionSearch;