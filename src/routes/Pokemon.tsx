import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPokeInfo } from '../api';

import PokeInfo from '../components/PokeInfo';
import PoketGif from '../components/PokeGif';
import PoketLogo from '../components/PokeLogo';
import PokeTypes from '../components/PokeTypes';

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
  margin-top: 50px;
`;

const Header = styled.header`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
`;

const ImgDiv = styled.div`
  display: flex;
  border-style: solid;
  border-width: 6px;
  border-color: #a7aeec;
  border-radius: 15px;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 80px;
`;

function Poketmon() {
  const { poketId } = useParams<RouteParams>();
  const no =
    Number(poketId) >= 100
      ? 'No.' + poketId
      : Number(poketId) >= 10
      ? 'No.0' + poketId
      : 'No.00' + poketId;
  const { isLoading, data } = useQuery<IPokeInfo>(['PokeTypes'], () =>
    fetchPokeInfo(poketId)
  );

  console.log(data);
  console.log(data?.types[0].type.name);
  return (
    <Container>
      <Header>
        <PoketLogo />
      </Header>

      <Wrapper>
        <LeftDiv>
          <ImgDiv>
            <PoketGif index={poketId} />
          </ImgDiv>
        </LeftDiv>

        <RightDiv>
          {isLoading === true ? (
            <div>Loading...</div>
          ) : (
            <PokeInfo no={no} info={data}></PokeInfo>
            // <PokeTypes data={data} />
          )}
        </RightDiv>
      </Wrapper>
    </Container>
  );
}

export default Poketmon;
