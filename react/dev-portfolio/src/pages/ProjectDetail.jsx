import { useParams, useNavigate } from "react-router-dom";


const CONTENT_DATA = {
  foundations: { task: "Semantic HTML & CSS Layouts", difficulty: "Beginner" },
  "advanced-core": {
    task: "Async JS & Tailwind Implementation",
    difficulty: "Intermediate",
  },
  "react-mastery": {
    task: "Single Page Apps with Router",
    difficulty: "Advanced",
  },
  "backend-entry": {
    task: "Node.js & API Architecture",
    difficulty: "Mastery",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const data = CONTENT_DATA[id] || { task: "Learning in progress...", difficulty: "N/A" };

  return (
    <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
      <h2 className="text-3xl font-bold capitalize">{id.replace("-", " ")}</h2>
      <p className="text-blue-400 font-mono mt-2">Challenge: {data.task}</p>
      <p className="text-slate-500 mt-1 text-sm">Level: {data.difficulty}</p>
    </div>
  );
}
