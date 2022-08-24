import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPoketmons } from '../api';
import PoketLogo from './PoketLogo';

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

const PoketmonsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Poketmon = styled.div`
  display: flex;
  border-style: solid;
  border-width: 3px;
  border-color: #a7aeec;

  justify-content: center;
  width: 200px;
  font-size: 25px;
  font-weight: 550;
  background-color: white;
  color: ${(props) => props.theme.textColor};
  margin: 13px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.3s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }

  :hover {
    border-width: 6px;
    border-color: #a7aeec;
    margin: 10px 13px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const PoketName = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  margin-top: -10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    margin-bottom: 15px;
    width: 100%;
    height: 80px;
  }
`;

interface IPoketmon {
  count: number;
  next: string;
  previous: string;
  results: IResult[];
}

interface IResult {
  name: string;
  url: string;
}

function Poketmons() {
  const { isLoading, data } = useQuery<IPoketmon>(
    ['allPoketmons'],
    fetchPoketmons
  );

  console.log(data);
  return (
    <Container>
      <Header>
        <PoketLogo />
      </Header>
      {isLoading === true ? (
        <div>Loading....</div>
      ) : (
        <Wrapper>
          <PoketmonsList>
            {data?.results.map((poketmon, i) => (
              <Poketmon>
                <Link
                  to={{
                    pathname: `/${i + 1}`,
                    state: { num: i },
                  }}
                >
                  <PoketName>{poketmon.name}</PoketName>
                  <ImgWrapper>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
                        i + 1
                      }.gif`}
                      alt="profile"
                    />
                  </ImgWrapper>
                </Link>
              </Poketmon>
            ))}
          </PoketmonsList>
        </Wrapper>
      )}
    </Container>
  );
}

export default Poketmons;
