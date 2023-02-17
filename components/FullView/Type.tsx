import Image from "next/image";
import { Type } from "../../typings/pokemon";

const Type = ({ type }: { type: Type }) => {
  const color = type.color;
  const icon = type.icon;
  const pokemonType = type.type;
  return (
    <div className="flex flex-col">
      <div
        className="items-center px-4 md:px-6 py-4 md:py-4 rounded-full space-y-2 relative h-[30px] md:h-[50px]"
        style={{ backgroundColor: `${color}` }}
      >
        <Image src={icon} fill alt={pokemonType} className={`${type} icon`} />
      </div>
    </div>
  );
};

export default Type;
