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
  padding: 8px 10px;
  text-align: center;
  display: flex;
  border-radius: 50px;

  border-color: green;
  background-color: green;
  border-width: 1px;
  border-style: solid;
`;

function PokeTypes({ data }: { data: IPokeTypes | undefined }) {
  return (
    <div>
      {data?.types.map((types) => (
        <Button>{types?.type.name}</Button>
      ))}
    </div>
  );
}

export default PokeTypes;
