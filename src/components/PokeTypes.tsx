import styled from 'styled-components';

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

const Button = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
  font-weight: bold;
  padding: 8px 8px 11px;
  text-align: center;
  display: flex;
  color: white;

  border-radius: 1em;
  border-color: #39b6ff;
  background-color: green;
  border-width: 3px;
  border-style: solid;
`;

function PokeTypes({ info }: { info: IPokeTypes | undefined }) {
  return (
    <div style={{ display: 'flex' }}>
      {info?.types.map((types) => (
        <Button>{types?.type.name}</Button>
      ))}
    </div>
  );
}

export default PokeTypes;
