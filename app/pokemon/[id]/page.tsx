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
  // @ts-expect-error
  return <></>;
};

export default PokePage;
