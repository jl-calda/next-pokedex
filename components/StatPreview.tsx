import {
  GiHealthNormal,
  GiBroadsword,
  GiHealingShield,
  GiIceSpellCast,
  GiLayeredArmor,
  GiSonicShoes,
} from "react-icons/gi";

const StatPreview = ({ name, value }: { name: string; value: number }) => {
  return (
    <div>
      <div className="flex space-x-1 justify-between items-center">
        <div className="flex space-x-2 items-center justify-center">
          <div>
            {name === "hp" ? (
              <GiHealthNormal className="text-sm" />
            ) : name === "attack" ? (
              <GiBroadsword className="text-sm" />
            ) : name === "defense" ? (
              <GiHealingShield className="text-sm" />
            ) : name === "special-attack" ? (
              <GiIceSpellCast className="text-sm" />
            ) : name === "special-defense" ? (
              <GiLayeredArmor className="text-sm" />
            ) : name === "speed" ? (
              <GiSonicShoes className="text-sm" />
            ) : null}
          </div>
        </div>

        <div className="w-full h-[10px] border-[1px] border-slate-700 flex rounded-full bg-red-50">
          <div
            className={`w-[${value}%] bg-red-400 h-full rounded-full border-r-[1px] border-slate-700`}
            style={{ width: `${value / 2}%` }}
          ></div>
        </div>
        <div className="text-[10px]">{`${value}`}</div>
      </div>
    </div>
  );
};

export default StatPreview;
