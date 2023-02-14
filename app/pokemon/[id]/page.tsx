import CardFull from "../../../components/CardFull";
import Link from "next/link";

const PokePage = ({ params: { id } }: { params: { id: number } }) => {
  const getPageDown = (id: number) => {
    if (id == 1) {
      return 1008;
    } else {
      return Number(id) - 1;
    }
  };
  const getPageUp = (id: number) => {
    if (id == 1008) {
      return 1;
    } else {
      return Number(id) + 1;
    }
  };

  const arrowStyle =
    "text-3xl font-bold hover:scale-105 hover:bg-slate-500 transition-all duration-300 h-[50px] flex items-center justify-center w-[50px] rounded-full bg-slate-700 text-white";
  return (
    <div className="flex items-center">
      <Link href={`/pokemon/${getPageDown(id)}`} className={arrowStyle}>
        {" "}
        <p>{`<`}</p>
      </Link>
      {/* @ts-expect-error */}
      <CardFull id={id} />
      <Link href={`/pokemon/${getPageUp(id)}`} className={arrowStyle}>
        <p>{`>`}</p>
      </Link>
    </div>
  );
};

export default PokePage;
