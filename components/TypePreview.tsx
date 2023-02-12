import Image from "next/image";

const TypePreview = ({
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
      className="flex items-center px-1 py-1 rounded-full space-x-2"
      style={{ backgroundColor: `${color}` }}
    >
      <Image
        src={icon}
        height={30}
        width={30}
        alt={type}
        className={`${type} icon`}
      />
    </div>
  );
};

export default TypePreview;
