function AdmissionModal({
  application,
  onClose,
  onApprove,
  onReject,
}) {
  if (!application) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl">

        {/* Header */}
        <div className="bg-navy-dark text-white px-6 py-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Admission Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl hover:text-gold transition"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold text-gray-600">
                Parent Name
              </label>

              <p className="text-lg text-navy-dark">
                {application.fullName}
              </p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Student Name
              </label>

              <p className="text-lg text-navy-dark">
                {application.childName}
              </p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Email
              </label>

              <p>{application.email}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Phone
              </label>

              <p>{application.phone}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Gender
              </label>

              <p>{application.gender}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Date of Birth
              </label>

              <p>{application.dateOfBirth}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                State of Origin
              </label>

              <p>{application.stateOfOrigin}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Class Applying For
              </label>

              <p>{application.classApplying}</p>
            </div>

            <div>
              <label className="font-semibold text-gray-600">
                Status
              </label>

              <p>
                {application.status === "approved" ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Approved
                  </span>
                ) : application.status === "rejected" ? (
                  <span className="bg-deep-wine text-white px-3 py-1 rounded-full">
                    Rejected
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>
                )}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-3 mt-8">

            <button
              onClick={() => onApprove(application)}
              disabled={application.status === "approved"}
              className={`px-5 py-3 rounded-lg font-semibold transition ${
                application.status === "approved"
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gold text-navy-dark hover:bg-yellow-300"
              }`}
            >
              Approve
            </button>

            <button
              onClick={() => onReject(application)}
              disabled={application.status === "rejected"}
              className={`px-5 py-3 rounded-lg font-semibold transition ${
                application.status === "rejected"
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-deep-wine text-white hover:bg-red-800"
              }`}
            >
              Reject
            </button>

            <button
              onClick={onClose}
              className="bg-navy-dark text-white px-5 py-3 rounded-lg hover:bg-[#10294a] transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AdmissionModal;