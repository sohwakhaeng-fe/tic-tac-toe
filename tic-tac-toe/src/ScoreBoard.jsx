import "./ScoreBoard.css";

const ScoreBoard = ({scores, player}) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!player && "inactive"}`}>
        X: {xScore}
      </span>
      <span className={`score o-score ${player && "inactive"}`}>
        O: {oScore}
      </span>
    </div>
  );
}

export default ScoreBoard