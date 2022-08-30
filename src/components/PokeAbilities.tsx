import styled from 'styled-components';

interface IPokeInfo {
  types: IPokeType[];
  forms: IPokeForms[];
  abilities: Ability1[];
}

interface IPokeForms {
  name: string;
}

interface IPokeType {
  slot: number;
  type: IType;
}

interface Ability1 {
  ability: Ability2;
}

interface Ability2 {
  name: string;
}

interface IType {
  name: string;
}

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

function PokeAbilities({ info }: { info: IPokeInfo | undefined }) {
  return (
    <div style={{ display: 'flex' }}>
      {info?.abilities.map((ability, i) => (
        <Button key={i}>{ability.ability.name}</Button>
      ))}
    </div>
  );
}

export default PokeAbilities;
