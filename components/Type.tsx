import Image from "next/image";

const Type = ({
  type,
  color,
  icon,
}: {
  type: string;
  color: string;
  icon: string;
}) => {
  return (
    <div
      className="flex items-center px-2 py-1 rounded-full space-x-2"
      style={{ backgroundColor: `${color}` }}
    >
      <Image
        src={icon}
        height={20}
        width={20}
        alt={type}
        className={`${type} icon`}
      />
      <div className="text-xs text-slate-100 font-bold uppercase">{type}</div>
    </div>
  );
};

export default Type;
