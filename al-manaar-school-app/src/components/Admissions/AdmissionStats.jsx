function AdmissionStats({
  total,
  approved,
  pending,
  rejected,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      {/* Total */}
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-gold p-6">
        <p className="text-gray-500 text-sm font-medium">
          Total Applications
        </p>

        <h2 className="text-4xl font-bold text-navy-dark mt-2">
          {total}
        </h2>
      </div>

      {/* Approved */}
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-green-600 p-6">
        <p className="text-gray-500 text-sm font-medium">
          Approved
        </p>

        <h2 className="text-4xl font-bold text-green-600 mt-2">
          {approved}
        </h2>
      </div>

      {/* Pending */}
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-gold p-6">
        <p className="text-gray-500 text-sm font-medium">
          Pending
        </p>

        <h2 className="text-4xl font-bold text-gold mt-2">
          {pending}
        </h2>
      </div>

      {/* Rejected */}
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-deep-wine p-6">
        <p className="text-gray-500 text-sm font-medium">
          Rejected
        </p>

        <h2 className="text-4xl font-bold text-deep-wine mt-2">
          {rejected}
        </h2>
      </div>

    </div>
  );
}

export default AdmissionStats;