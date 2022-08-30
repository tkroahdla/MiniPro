import styled from 'styled-components';

const Gif = styled.img`
  width: 100%;
  height: 100%;
`;

function PoketGif({ index }: { index: string }) {
  return (
    <Gif
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`}
      alt="profile"
    />
  );
}
export default PoketGif;
