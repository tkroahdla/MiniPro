import styled from 'styled-components';
import PokeAbilities from './PokeAbilities';
import PokeTypes from './PokeTypes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-color: ${(props) => props.theme.borderColor};
  border-width: 6px;
  border-style: solid;
  border-radius: 15px;
  background-color: #edfbfc;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const Number = styled.div`
  margin: 13px 22px 9px 0px;
  font-size: 21px;
  font-weight: 600;
  color: black;
  border-color: #ffafe4;
  border-width: 3px;
  border-style: solid;
  border-radius: 15px;
  padding: 10px;
  background-color: white;

  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
`;

const InfoWrapper = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Information = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin: 0px 10px;
`;

function PokeInfo({
  no,
  info,
}: {
  no: string | undefined;
  info: IPokeInfo | undefined;
}) {
  {
    console.log('여기임');
    console.log(info);
  }
  return (
    <Wrapper>
      <HeaderWrapper>
        <Name>{info?.forms[0].name}</Name>
        <Number>{no}</Number>
      </HeaderWrapper>
      <InfoWrapper>
        <Information>type : </Information>
        <PokeTypes info={info}></PokeTypes>
      </InfoWrapper>
      <InfoWrapper>
        <Information>abilities : </Information>
        <PokeAbilities info={info}></PokeAbilities>
      </InfoWrapper>
    </Wrapper>
  );
}

export default PokeInfo;
