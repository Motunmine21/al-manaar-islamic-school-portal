import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

/**
 * Generate the next Student ID
 * Example:
 * ALM0001
 * ALM0002
 * ALM0003
 */
export const generateStudentId = async () => {
  try {
    const snapshot = await getDocs(collection(db, "students"));

    const nextNumber = snapshot.size + 1;

    return `ALM${String(nextNumber).padStart(4, "0")}`;
  } catch (error) {
    console.error("Error generating Student ID:", error);
    throw error;
  }
};

/**
 * Format Firebase Timestamp
 */
export const formatDate = (timestamp) => {
  if (!timestamp) return "-";

  const date = timestamp.toDate
    ? timestamp.toDate()
    : new Date(timestamp);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

/**
 * Calculate Total Score
 */
export const calculateTotal = (subjects = {}) => {
  return Object.values(subjects).reduce(
    (total, score) => total + Number(score || 0),
    0
  );
};

/**
 * Calculate Average Score
 */
export const calculateAverage = (subjects = {}) => {
  const scores = Object.values(subjects);

  if (scores.length === 0) return 0;

  return (
    calculateTotal(subjects) / scores.length
  ).toFixed(2);
};

/**
 * Calculate Grade
 */
export const calculateGrade = (average) => {
  if (average >= 70) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  if (average >= 45) return "D";
  if (average >= 40) return "E";
  return "F";
};

/**
 * Determine Student Level
 */
export const getStudentLevel = (className = "") => {
  const cls = className.toLowerCase();

  if (
    cls.includes("nursery") ||
    cls.includes("primary")
  ) {
    return "Primary";
  }

  return "Secondary";
};