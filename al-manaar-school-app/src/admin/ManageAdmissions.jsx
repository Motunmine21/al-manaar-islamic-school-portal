import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

function ManageAdmissions() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState(null);

  const fetchApplications = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "applications")
      );

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await updateDoc(
        doc(db, "applications", id),
        { status }
      );

      setApplications((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, status }
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(
        doc(db, "applications", id)
      );

      setApplications((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const filteredApplications =
    applications.filter(
      (item) =>
        item.childName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.fullName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.classApplying
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

  const totalApplications =
    applications.length;

  const approvedApplications =
    applications.filter(
      (app) => app.status === "approved"
    ).length;

  const pendingApplications =
    applications.filter(
      (app) =>
        app.status === "pending" ||
        !app.status
    ).length;

  const rejectedApplications =
    applications.filter(
      (app) => app.status === "rejected"
    ).length;

  return (
    <div className="p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-navy-dark mb-6">
        Manage Admissions
      </h1>

      {/* STATISTICS */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white rounded-xl shadow p-5 border-t-4 border-gold">
          <h3 className="text-gray-500">
            Total Applications
          </h3>

          <p className="text-3xl font-bold text-navy-dark">
            {totalApplications}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border-t-4 border-gold">
          <h3 className="text-gray-500">
            Approved
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {approvedApplications}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border-t-4 border-gold">
          <h3 className="text-gray-500">
            Pending
          </h3>

          <p className="text-3xl font-bold text-gold">
            {pendingApplications}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border-t-4 border-gold">
          <h3 className="text-gray-500">
            Rejected
          </h3>

          <p className="text-3xl font-bold text-deep-wine">
            {rejectedApplications}
          </p>
        </div>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search applicant..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          md:w-1/2
          border
          p-3
          rounded-lg
          mb-6
          focus:outline-none
          focus:ring-2
          focus:ring-gold
        "
      />

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border-t-4 border-gold">
        <table className="w-full">
          <thead className="bg-navy-dark text-white">
            <tr>
              <th className="p-4 text-left">
                Parent Name
              </th>

              <th className="p-4 text-left">
                Student Name
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Gender
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b hover:bg-gold-light"
                >
                  <td className="p-4">
                    {app.fullName}
                  </td>

                  <td className="p-4">
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
                    {app.status ===
                    "approved" ? (
                      <span className="bg-gold-light text-navy-dark px-3 py-1 rounded-full text-sm font-medium">
                        Approved
                      </span>
                    ) : app.status ===
                      "rejected" ? (
                      <span className="bg-deep-wine text-white px-3 py-1 rounded-full text-sm font-medium">
                        Rejected
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">

                      <button
                        onClick={() =>
                          setSelectedApplication(app)
                        }
                        className="bg-navy-dark text-white px-3 py-2 rounded-lg"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            app.id,
                            "approved"
                          )
                        }
                        className="bg-gold text-navy-dark px-3 py-2 rounded-lg font-medium"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            app.id,
                            "rejected"
                          )
                        }
                        className="bg-navy-blue text-white px-3 py-2 rounded-lg font-medium"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(app.id)
                        }
                        className="bg-deep-wine text-white px-3 py-2 rounded-lg font-medium"
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
                  className="text-center p-8 text-gray-500"
                >
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* VIEW DETAILS MODAL */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-navy-dark">
                Application Details
              </h2>

              <button
                onClick={() =>
                  setSelectedApplication(null)
                }
                className="text-deep-wine text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <p className="font-semibold">
                  Parent Name
                </p>
                <p>{selectedApplication.fullName}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Email
                </p>
                <p>{selectedApplication.email}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Phone
                </p>
                <p>{selectedApplication.phone}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Student Name
                </p>
                <p>{selectedApplication.childName}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Gender
                </p>
                <p>{selectedApplication.gender}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Date of Birth
                </p>
                <p>{selectedApplication.dateOfBirth}</p>
              </div>

              <div>
                <p className="font-semibold">
                  State of Origin
                </p>
                <p>{selectedApplication.stateOfOrigin}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Class Applying
                </p>
                <p>{selectedApplication.classApplying}</p>
              </div>

            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() =>
                  setSelectedApplication(null)
                }
                className="bg-deep-wine text-white px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ManageAdmissions;