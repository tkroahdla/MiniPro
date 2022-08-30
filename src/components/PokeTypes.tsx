import styled from 'styled-components';

const Button = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 13px;
  font-weight: bold;
  padding: 4px 8px 7px;
  margin-right: 7px;
  text-align: center;
  display: flex;
  color: white;

  border-radius: 1em;
  border-color: #39b6ff;
  background-color: green;
  border-width: 3px;
  border-style: solid;
`;

function PokeTypes({ info }: { info: IPokeInfo | undefined }) {
  return (
    <div style={{ display: 'flex' }}>
      {info?.types.map((types) => (
        <Button key={types?.type.name}>{types?.type.name}</Button>
      ))}
    </div>
  );
}

export default PokeTypes;
