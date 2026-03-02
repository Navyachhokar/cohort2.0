const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
        <p className="text-slate-500 text-sm">Days of Coding</p>
        <h4 className="text-3xl font-bold">190</h4>
      </div>
      <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
        <p className="text-slate-500 text-sm">Commits on GitHub</p>
        <h4 className="text-3xl font-bold">120+</h4>
      </div>
    </div>
  );
};

export default Stats;
