import { Link } from "@tanstack/react-router";

interface Props {
  to:
    | "/dashboard"
    | "/dashboard/services"
    | "/dashboard/servers"
    | "/dashboard/profile"
    | "/dashboard/failures"
    | "/dashboard/users";
  children: React.ReactNode;
}

const DashboardLink = ({ to, children }: Props) => {
  return (
    <Link
      to={to}
      className="flex flex-row items-center gap-2 px-4 py-2 md:pl-8 hover:cursor-pointer hover:bg-neutral-300/20 rounded-md"
      activeProps={{ className: "font-bold bg-neutral-300/10" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
};

export default DashboardLink;
