import React, { useReducer, useState, useEffect, useRef, useMemo } from "react";

const initialState = JSON.parse(localStorage.getItem("students")) || [];

const manageStudent = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((student) => student.id !== action.payload);
    case "EDIT":
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    default:
      return state;
  }
};

const SinhVien = () => {
  const [students, dispatch] = useReducer(manageStudent, initialState);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [editId, setEditId] = useState(null);
  const nameRef = useRef();
  const scoreRef = useRef();

  // Lưu dữ liệu vào localStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Tính điểm trung bình
  const averageScore = useMemo(() => {
    if (students.length === 0) return 0;
    const total = students.reduce(
      (sum, student) => sum + parseFloat(student.score),
      0
    );
    return (total / students.length).toFixed(2);
  }, [students]);

  const handleAddOrEditStudent = () => {
    if (!name || !score) return;
    if (editId) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, name, score },
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: { id: Date.now(), name, score },
      });
    }
    setName("");
    setScore("");
    nameRef.current.focus();
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
    setScore(student.score);
    nameRef.current.focus();
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Quản Lý Sinh Viên</h1>
      <div className="flex gap-2 mb-4">
        <input
          ref={nameRef}
          type="text"
          placeholder="Tên sinh viên"
          className="flex-1 p-2 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          ref={scoreRef}
          type="number"
          placeholder="Điểm"
          className="w-24 p-2 border rounded-lg"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button
          onClick={handleAddOrEditStudent}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {editId ? "Sửa" : "Thêm"}
        </button>
      </div>

      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex justify-between items-center p-2 border rounded-lg"
          >
            <span>
              {student.name} - {student.score} điểm
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(student)}
                className="px-2 py-1 bg-yellow-400 text-white rounded"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-center">
        <strong>Điểm trung bình của lớp:</strong> {averageScore}
      </div>
    </div>
  );
};

export default SinhVien;
