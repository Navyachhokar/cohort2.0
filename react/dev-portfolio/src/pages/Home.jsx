import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [milestones, setMilestones] = useState([
    {
      id: "foundations",
      title: "Phase 1: The Foundations",
      desc: "Built the base with Semantic HTML, CSS Fundamentals, and Basic JavaScript manipulation.",
      tags: ["HTML5", "CSS3", "JS-Basics"],
      status: "Completed",
      color: "from-orange-500",
    },
    {
      id: "advanced-core",
      title: "Phase 2: Advanced Web",
      desc: "Mastered Modern CSS (Flex/Grid) and Advanced JS (Promises, Async/Await, ES6+).",
      tags: ["Tailwind", "ES6", "Async-JS"],
      status: "Completed",
      color: "from-emerald-500",
    },
    {
      id: "react-mastery",
      title: "Phase 3: React Ecosystem",
      desc: "Currently building SPAs using Hooks, State Management, and React Router DOM.",
      tags: ["React.js", "SPAs", "Hooks"],
      status: "In Progress",
      color: "from-blue-500",
    },
    {
      id: "backend-entry",
      title: "Phase 4: Backend Dev",
      desc: "Upcoming: Learning to build servers, handle APIs, and manage databases with Node.js.",
      tags: ["Node.js", "Express", "MongoDB"],
      status: "To be Started",
      color: "from-purple-600",
    },
  ]);

  const completedCount = milestones.filter(
    (m) => m.status === "Completed",
  ).length;
  const progressPercent = Math.round(
    (completedCount / milestones.length) * 100,
  );

  const completeAll = () => {
    const updated = milestones.map((m) => ({ ...m, status: "Completed" }));
    setMilestones(updated);
  };

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 max-w-6xl mx-auto pb-10">
 
      <header className="mb-10 md:mb-16 border-b border-slate-800 pb-8 md:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
         
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                Last Sync: {lastUpdated}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black bg-gradient-to-br from-white via-slate-300 to-slate-600 bg-clip-text text-transparent tracking-tighter leading-tight">
              Cohort Journey
            </h1>

            <p className="text-slate-400 text-sm md:text-lg font-light tracking-wide max-w-md mx-auto lg:mx-0">
              Tracking my evolution from static tags to full-scale React
              architecture.
            </p>
          </div>

          <div className="w-full lg:w-72 bg-slate-900/50 border border-slate-800 p-5 rounded-3xl shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Progress
              </span>
              <span className="text-blue-400 font-mono text-sm font-bold">
                {progressPercent}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-emerald-400 transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {milestones.map((milestone) => (
          <Link
            key={milestone.id}
            to={
              milestone.status === "To be Started"
                ? "#"
                : `/project/${milestone.id}`
            }
            className="group relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${milestone.color} to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-10 transition-all duration-700`}
            />

            <div
              className={`relative h-full border p-10 rounded-3xl transition-all duration-500 flex flex-col justify-between ${
                milestone.status === "To be Started"
                  ? "bg-slate-950/40 border-slate-900 opacity-50 italic"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-500 hover:-translate-y-1"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span
                    className={`px-3 py-1 rounded-lg text-[10px] font-black border uppercase tracking-widest transition-all ${
                      milestone.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : milestone.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse"
                          : "bg-slate-800 text-slate-600 border-slate-700"
                    }`}
                  >
                    {milestone.status}
                  </span>
                  <div
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${milestone.color}`}
                  />
                </div>

                <h3
                  className={`text-3xl font-bold mb-4 ${milestone.status !== "To be Started" ? "group-hover:text-white" : "text-slate-600"}`}
                >
                  {milestone.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {milestone.desc}
                </p>
              </div>

              <div className="flex gap-3">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold text-slate-500 border border-slate-800 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};;

export default Home;
