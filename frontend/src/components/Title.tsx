interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return <h1 className="font-bold text-xl">{label}</h1>;
};

export default Title;
