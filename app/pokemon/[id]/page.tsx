import CardFull from "../../../components/CardFull";
import Link from "next/link";
import ColoredDiv from "../../../components/ColoredBg";
import Card from "../../../components/Card";

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
  // @ts-expect-error
  return <ColoredDiv id={id} children={<Card id={id} />} />;
};

export default PokePage;
