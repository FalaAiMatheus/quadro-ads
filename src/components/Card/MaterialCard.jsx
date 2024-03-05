import { Link } from "react-router-dom";

export function MaterialCard({ children, nav }) {
  return (
    <Link
      to={nav}
      className="bg-slate-200 p-3 rounded-md border border-slate-400"
    >
      {children}
    </Link>
  );
}
