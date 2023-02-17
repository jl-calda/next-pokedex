import {
  GiHealthNormal,
  GiBroadsword,
  GiHealingShield,
  GiIceSpellCast,
  GiLayeredArmor,
  GiSonicShoes,
} from "react-icons/gi";
import { Stat } from "../../typings/pokemon";

const Stat = ({ stat }: { stat: Stat }) => {
  const name = stat.name;
  const value = stat.value;
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <div className="flex justify-start items-center text-xs md:text-sm tracking-wide uppercase">
        {name.replaceAll("-", " ")}
      </div>

      <div className="w-full col-span-3 flex space-x-2 items-center">
        <div>
          {name === "hp" ? (
            <GiHealthNormal className="text-xl md:text-2xl" />
          ) : name === "attack" ? (
            <GiBroadsword className="text-xl md:text-2xl" />
          ) : name === "defense" ? (
            <GiHealingShield className="text-xl md:text-2xl" />
          ) : name === "special-attack" ? (
            <GiIceSpellCast className="text-xl md:text-2xl" />
          ) : name === "special-defense" ? (
            <GiLayeredArmor className="text-xl md:text-2xl" />
          ) : name === "speed" ? (
            <GiSonicShoes className="text-xl md:text-2xl" />
          ) : null}
        </div>

        <div className="w-full h-[15px] md:h-[20px] flex border-[1px] border-slate-800 rounded-full bg-red-50">
          <div
            className={`w-[${value}%] bg-red-400 h-full rounded-full border-r-[1px] border-slate-800`}
            style={{ width: `${value / 2}%` }}
          ></div>
        </div>
        <div className="text-xs md:text-sm">{`${value}`}</div>
      </div>
    </div>
  );
};

export default Stat;
