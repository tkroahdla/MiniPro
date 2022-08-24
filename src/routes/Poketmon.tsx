import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PoketGif from './PoketGif';
import PoketLogo from './PoketLogo';

interface RouteParams {
  poketId: string;
}

const Container = styled.div`
  padding: 0px 30px;
  width: 100vw;
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
        <PoketLogo />
      </Header>
      <PoketGif index={poketId} />
    </Container>
  );
}

export default Poketmon;
