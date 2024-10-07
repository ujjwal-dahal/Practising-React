import "../style/StudentMarks.css"

function StudentMarks(){
  const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 62 },
    { name: "Charlie", marks: 77 },
    { name: "David", marks: 20 },
    { name: "Eve", marks: 55 },
    { name: "Frank", marks: 31 },
    { name: "Grace", marks: 94 },
    { name: "Hannah", marks: 38 },
    { name: "Isaac", marks: 82 },
    { name: "Jack", marks: 73 },
  ];

  return (
    <>
      {students.map((item, index) => (
        <div className="main-container" key={index}>
          <p>Student Name: {item.name}</p>
          <p>Marks: {item.marks}</p>
          <p>Status: {item.marks < 40 ? "❌ Fail" : "✅ Pass"}</p>
        </div>
      ))}
    </>
  );
}

export default StudentMarks;