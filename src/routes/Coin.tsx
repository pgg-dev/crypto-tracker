import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams<{ coinId: string }>();

  return <h1>{coinId}</h1>;
}

export default Coin;
