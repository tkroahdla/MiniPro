interface IGifProps {
  index: string | number | null;
}

function PoketGif({ index }: IGifProps) {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`}
      alt="profile"
    />
  );
}
export default PoketGif;
