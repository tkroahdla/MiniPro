import styled from 'styled-components';
import PokeTypes from './PokeTypes';

interface IPokeInfo {
  types: IPokeType[];
  forms: IPokeForms[];
}

interface IPokeForms {
  name: string;
}

interface IPokeType {
  slot: number;
  type: IType;
}

interface IType {
  name: string;
}

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
  margin: 9px 8px;
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

const TypeWrapper = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Types = styled.span`
  font-size: 20px;
  font-weight: bold;
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
      <TypeWrapper>
        <Types>type : </Types>
        <PokeTypes info={info}></PokeTypes>
      </TypeWrapper>
    </Wrapper>
  );
}

export default PokeInfo;
