import { ReactNode } from "@tanstack/react-router";
import Spinner from "./Spinner";

interface Props {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
}

const SecondaryButton = ({ children, loading = false, onClick }: Props) => {
  return (
    <button
      className="hover:cursor-pointer font-bold dark:hover:text-blue-500 hover:underline hover:underline-offset-2 duration-300"
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default SecondaryButton;
