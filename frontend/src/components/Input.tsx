interface Props {
  name: string;
  placeholder: string;
  type: string;
  value?: string;
}

const Input = ({
  name,
  placeholder = "",
  type = "text",
  value = "",
}: Props) => {
  return (
    <input
      name={name}
      className="px-4 py-2 rounded-md  dark:bg-neutral-100/10 hover:bg-neutral-200/70 dark:hover:bg-neutral-100/20 duration-300"
      type={type}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};

export default Input;
