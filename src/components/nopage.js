import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const NoPage = () => {
  return (
    <div className="nopage min-h-svh w-full flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl text-center transition-all duration-300 hover:border-yellow-500/20 hover:shadow-yellow-500/5">
        <div className="relative inline-flex items-center justify-center w-20 h-20 bg-slate-950 border border-slate-900 ring-4 ring-slate-900/50 rounded-full shadow-inner mb-6 text-red-500 text-3xl">
          <FiAlertTriangle />

          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none rounded-full" />
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
          Nothing to see here!
        </h2>

        <p className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-8">
          Error Code: 404_PAGE_NOT_FOUND
        </p>

        <div className="max-w-xs mx-auto">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full bg-slate-950 border border-slate-800 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wider text-slate-300 hover:text-yellow-500 hover:border-yellow-500/30 active:scale-95 transition-all duration-300 group"
          >
            <span>Go to the home page</span>
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
