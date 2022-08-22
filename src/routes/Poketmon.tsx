import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RouteParams {
  poketId: string;
}

const Container = styled.div`
  padding: 0px 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 200px;
`;

const Header = styled.header`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

function Poketmon() {
  const { poketId } = useParams<RouteParams>();
  console.log(poketId);
  return (
    <Container>
      <Header>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="asdf"
          width="300px"
          height="100px"
        />
      </Header>
    </Container>
  );
}

export default Poketmon;
