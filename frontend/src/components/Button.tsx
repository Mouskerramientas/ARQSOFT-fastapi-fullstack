import { ReactNode } from "@tanstack/react-router";
import Spinner from "./Spinner";

interface Props {
  children: ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

const Button = ({
  children,
  loading = false,
  type = "button",
  onClick,
}: Props) => {
  return (
    <button
      className="flex flex-row items-center justify-center gap-2 py-2 px-4 font-bold rounded-md hover:cursor-pointer bg-blue-300 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600 duration-300"
      type={type}
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
