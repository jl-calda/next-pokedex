import PokemonList from "../components/PokemonList";

const Homepage = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PokemonList />
    </div>
  );
};

export default Homepage;
