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
      className="flex items-center p-[2px] rounded-full"
      style={{ backgroundColor: `${color}` }}
    >
      <Image
        src={icon}
        height={20}
        width={20}
        alt={type}
        className={`${type} icon`}
      />
    </div>
  );
};

export default TypePreview;
