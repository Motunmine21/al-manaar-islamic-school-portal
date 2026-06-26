function AdmissionTable({
  applications,
  onView,
  onApprove,
  onReject,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border-t-4 border-gold">
      <table className="w-full min-w-[900px]">
        <thead className="bg-navy-dark text-white">
          <tr>
            <th className="p-4 text-left">Parent Name</th>
            <th className="p-4 text-left">Student Name</th>
            <th className="p-4 text-left">Class</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gold-light transition"
              >
                <td className="p-4">{app.fullName}</td>

                <td className="p-4 font-medium text-navy-dark">
                  {app.childName}
                </td>

                <td className="p-4">
                  {app.classApplying}
                </td>

                <td className="p-4">
                  {app.gender}
                </td>

                <td className="p-4">
                  {app.phone}
                </td>

                <td className="p-4">
                  {app.status === "approved" ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Approved
                    </span>
                  ) : app.status === "rejected" ? (
                    <span className="bg-deep-wine text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Rejected
                    </span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <div className="flex flex-wrap justify-center gap-2">

                    <button
                      onClick={() => onView(app)}
                      className="bg-navy-dark hover:bg-navy-blue text-white px-3 py-2 rounded-lg transition"
                    >
                      View
                    </button>

                    <button
                      onClick={() => onApprove(app)}
                      disabled={app.status === "approved"}
                      className={`px-3 py-2 rounded-lg transition ${
                        app.status === "approved"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-gold text-navy-dark hover:bg-yellow-300"
                      }`}
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => onReject(app)}
                      disabled={app.status === "rejected"}
                      className={`px-3 py-2 rounded-lg transition ${
                        app.status === "rejected"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-deep-wine text-white hover:bg-red-800"
                      }`}
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => onDelete(app.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-12 text-gray-500"
              >
                <div className="flex flex-col items-center">
                  <p className="text-5xl mb-3">📂</p>

                  <h2 className="text-xl font-semibold text-navy-dark">
                    No Applications Found
                  </h2>

                  <p>
                    New admission applications will appear here.
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdmissionTable;