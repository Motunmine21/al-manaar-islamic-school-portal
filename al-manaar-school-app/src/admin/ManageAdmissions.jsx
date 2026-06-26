import { useEffect, useState } from "react";
import AdmissionStats from "../components/Admissions/AdmissionStats";
import AdmissionSearch from "../components/Admissions/AdmissionSearch";
import AdmissionTable from "../components/Admissions/AdmissionTable";
import AdmissionModal from "../components/Admissions/AdmissionModal";
import { createStudentFromAdmission } from "..components/Utils/StudentUtils";
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

  const updateStatus = async (application, status) => {
  try {
    await updateDoc(
      doc(db, "applications", application.id),
      {
        status,
      }
    );

    if (status === "approved") {
      const studentId =
        await createStudentFromAdmission(application);

      if (studentId) {
        alert(
          `Student admitted successfully!\nStudent ID: ${studentId}`
        );
      }
    }

    setApplications((prev) =>
      prev.map((item) =>
        item.id === application.id
          ? { ...item, status }
          : item
      )
    );

    if (
      selectedApplication &&
      selectedApplication.id === application.id
    ) {
      setSelectedApplication({
        ...selectedApplication,
        status,
      });
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
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

  const filteredApplications = applications.filter((item) => {
  const keyword = search.toLowerCase();

      return (
        item.childName?.toLowerCase().includes(keyword) ||
        item.fullName?.toLowerCase().includes(keyword) ||
        item.classApplying?.toLowerCase().includes(keyword) ||
        item.email?.toLowerCase().includes(keyword) ||
        item.phone?.toLowerCase().includes(keyword) ||
        item.gender?.toLowerCase().includes(keyword) ||
        item.stateOfOrigin?.toLowerCase().includes(keyword)
      );
  });

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
      <AdmissionStats
        total={totalApplications}
        approved={approvedApplications}
        pending={pendingApplications}
        rejected={rejectedApplications}
      />

      <AdmissionSearch
        search={search}
        setSearch={setSearch}
      />

      {/* TABLE */}
      <AdmissionTable
          applications={filteredApplications}
          onView={setSelectedApplication}
          onApprove={(app) => updateStatus(app, "approved")}
          onReject={(app) => updateStatus(app, "rejected")}
          onDelete={handleDelete}
      />
      {/* VIEW DETAILS MODAL */}
      <AdmissionModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onApprove={(app) => updateStatus(app, "approved")}
          onReject={(app) => updateStatus(app, "rejected")}
        />
    </div>
  );
}

export default ManageAdmissions;