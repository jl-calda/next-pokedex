import Image from "next/image";
import {
  GiHealthNormal,
  GiBroadsword,
  GiHealingShield,
  GiIceSpellCast,
  GiLayeredArmor,
  GiSonicShoes,
} from "react-icons/gi";

const Stat = ({ name, value }: { name: string; value: number }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2 items-center justify-center">
          <div>
            {name === "hp" ? (
              <GiHealthNormal className="text-2xl" />
            ) : name === "attack" ? (
              <GiBroadsword className="text-2xl" />
            ) : name === "defense" ? (
              <GiHealingShield className="text-2xl" />
            ) : name === "special-attack" ? (
              <GiIceSpellCast className="text-2xl" />
            ) : name === "special-defense" ? (
              <GiLayeredArmor className="text-2xl" />
            ) : name === "speed" ? (
              <GiSonicShoes className="text-2xl" />
            ) : null}
          </div>
          <div className="font-press-p2 text-sm font-bold tracking-tighter uppercase">
            {name.replaceAll("-", " ")}
          </div>
        </div>

        <div>{`${value}`}</div>
      </div>

      <div className="w-full h-[20px] border-2 border-slate-800 flex rounded-full bg-red-50">
        <div
          className={`w-[${value}%] bg-red-400 h-full rounded-full border-r-2 border-slate-800`}
          style={{ width: `${value / 2}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Stat;
