import Spinner from "./Spinner";

interface Props {
  label: string;
  loading?: boolean;
  onClick: () => void;
}

const SecondaryButton = ({ label, loading = false, onClick }: Props) => {
  return (
    <button
      className="hover:cursor-pointer font-bold dark:hover:text-blue-500 hover:underline hover:underline-offset-2 duration-300"
      onClick={onClick}
    >
      {loading && <Spinner />}
      {label}
    </button>
  );
};

export default SecondaryButton;
