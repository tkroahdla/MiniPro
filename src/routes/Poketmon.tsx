import { useParams } from 'react-router-dom';

interface RouteParams {
  poketId: string;
}

function Poketmon() {
  const { poketId } = useParams<RouteParams>();
  console.log(poketId);
  return <h1>{poketId}</h1>;
}

export default Poketmon;
