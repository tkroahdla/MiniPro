import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 300px;
  height: 100px;
`;

function PoketLogo() {
  return (
    <Link to={{ pathname: '/' }}>
      <LogoImg
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="asdf"
      />
    </Link>
  );
}
export default PoketLogo;
