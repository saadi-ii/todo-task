interface BoxNameProps {
  name: string;
}

export const BoxName = ({ name }: BoxNameProps) => {
  return (
    <div className="bg-gray-300 w-fit px-2 py-1 rounded-lg text-sm flex items-center justify-center">
      <div>{name}</div>
    </div>
  );
};
