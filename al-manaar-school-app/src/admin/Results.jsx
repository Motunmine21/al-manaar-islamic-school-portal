import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

 function Results() {
  // ================= STATES =================
  const [results, setResults] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [level, setLevel] = useState("primary");

  const [math, setMath] = useState(0);
  const [english, setEnglish] = useState(0);
  const [physics, setPhysics] = useState(0);

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  // ================= FETCH RESULTS =================
  const fetchResults = async () => {
    const snapshot = await getDocs(collection(db, "results"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  // ================= ID GENERATOR =================
  const generateStudentId = async (level) => {
    const snapshot = await getDocs(collection(db, "results"));
    const count = snapshot.size + 1;

    let prefix = "ALM";
    if (level === "primary") prefix = "PRY";
    if (level === "secondary") prefix = "SS";

    return `${prefix}${String(count).padStart(4, "0")}`;
  };

  // ================= CALCULATIONS =================
  const calculateTotal = () =>
    Number(math) + Number(english) + Number(physics);

  const calculateAverage = () => calculateTotal() / 3;

  const getGrade = (avg) => {
    if (avg >= 70) return "A";
    if (avg >= 60) return "B";
    if (avg >= 50) return "C";
    if (avg >= 40) return "D";
    return "F";
  };

  // ================= ADD RESULT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentId = await generateStudentId(level);

    const total = calculateTotal();
    const average = calculateAverage();
    const grade = getGrade(average);

    await addDoc(collection(db, "results"), {
      studentId,
      studentName,
      className,
      level,
      subjects: {
        math: Number(math),
        english: Number(english),
        physics: Number(physics),
      },
      total,
      average,
      grade,
      createdAt: new Date(),
    });

    alert(`Result saved! ID: ${studentId}`);

    setStudentName("");
    setClassName("");
    setMath(0);
    setEnglish(0);
    setPhysics(0);

    fetchResults();
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!confirm("Delete this result?")) return;

    await deleteDoc(doc(db, "results", id));
    setResults(results.filter((r) => r.id !== id));
  };

  // ================= EDIT =================
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditData(item);
  };

  const handleUpdate = async () => {
    const ref = doc(db, "results", editingId);

    await updateDoc(ref, editData);

    setResults(
      results.map((r) =>
        r.id === editingId ? { ...r, ...editData } : r
      )
    );

    setEditingId(null);
    setEditData({});
  };

  // ================= FILTER =================
  const filtered = results.filter(
    (item) =>
      item.studentName?.toLowerCase().includes(search.toLowerCase()) ||
      item.studentId?.toLowerCase().includes(search.toLowerCase()) ||
      item.className?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 font-sans">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-navy-dark mb-4">
        Results Management
      </h1>

      {/* SEARCH */}
      <input
        className="w-full md:w-1/2 border p-3 rounded mb-6"
        placeholder="Search by name, ID or class..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-10 border-t-4 border-deep-wine"
      >
        <div className="grid md:grid-cols-2 gap-4">

          <input
            className="border p-3 rounded"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            className="border p-3 rounded"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />

          <select
            className="border p-3 rounded"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>

          <input
            type="number"
            className="border p-3 rounded"
            placeholder="Math"
            value={math}
            onChange={(e) => setMath(e.target.value)}
          />

          <input
            type="number"
            className="border p-3 rounded"
            placeholder="English"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          />

          <input
            type="number"
            className="border p-3 rounded"
            placeholder="Physics"
            value={physics}
            onChange={(e) => setPhysics(e.target.value)}
          />
        </div>

        <button className="mt-4 bg-deep-wine text-white px-6 py-3 rounded hover:bg-navy-blue">
          Save Result
        </button>
      </form>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border-t-4 border-gold">
        <table className="w-full text-left">
          <thead className="bg-navy-dark text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Student</th>
              <th className="p-3">Class</th>
              <th className="p-3">Level</th>
              <th className="p-3">Total</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gold-light">

                <td className="p-3 font-bold text-deep-wine">
                  {item.studentId}
                </td>

                <td className="p-3">{item.studentName}</td>
                <td className="p-3">{item.className}</td>
                <td className="p-3">{item.level}</td>
                <td className="p-3">{item.total}</td>

                <td className="p-3 font-bold text-navy-dark">
                  {item.grade}
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => startEdit(item)}
                    className="bg-gold px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-deep-wine text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-xl font-bold mb-4 text-navy-dark">
              Edit Result
            </h2>

            <input
              className="w-full border p-2 mb-2"
              value={editData.studentName || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  studentName: e.target.value,
                })
              }
            />

            <input
              className="w-full border p-2 mb-2"
              value={editData.className || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  className: e.target.value,
                })
              }
            />

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleUpdate}
                className="bg-deep-wine text-white px-4 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditingId(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
  export default Results;