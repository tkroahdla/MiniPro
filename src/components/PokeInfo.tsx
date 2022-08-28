import styled from 'styled-components';
import PokeTypes from './PokeTypes';

interface IPokeTypes {
  types: IPokeType[];
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
  background-color: white;
`;

const NumName_Wrapper = styled.div`
  display: flex;
`;

const Number = styled.div``;

const Name = styled.div``;

function PokeInfo({
  no,
  info,
}: {
  no: string | undefined;
  info: IPokeTypes | undefined;
}) {
  return (
    <Wrapper>
      <NumName_Wrapper>
        <Number>{no}</Number>
        <Name>asdf</Name>
      </NumName_Wrapper>
      <PokeTypes info={info}></PokeTypes>
    </Wrapper>
  );
}

export default PokeInfo;
