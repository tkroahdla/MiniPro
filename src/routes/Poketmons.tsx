import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPokeImg, fetchPoketmons } from '../api';

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
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PoketmonsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Poketmon = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  font-size: 25px;
  background-color: white;
  color: ${(props) => props.theme.textColor};
  margin: 13px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.3s ease-in;
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }

  img {
    display: block;
    width: 100%;
    height: 130px;
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
        <Title>Poketmon</Title>
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
                    pathname: `/${poketmon.name}`,
                    state: { name: poketmon.name },
                  }}
                >
                  <PoketName>{poketmon.name}</PoketName>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      i + 1
                    }.png`}
                    alt="profile"
                  />
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
