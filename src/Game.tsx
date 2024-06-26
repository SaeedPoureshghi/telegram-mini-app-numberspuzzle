/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import PuzzleItems from "./components/PuzzleItems";
import { chunkArray, getDimention, shuffleArray } from "./utils";

import WebApp from "@twa-dev/sdk";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";

const Game: React.FC = () => {
  const Board: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const Board_Dimension = getDimention(Board);
  const [challenge, setChallenge] = React.useState(Board);
  const [rows, setRows] = React.useState(
    chunkArray(challenge, Board_Dimension)
  );
  const [moves, setMoves] = React.useState(0);
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  const address = useTonAddress();

  const onItemClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!isGameStarted) {
      return;
    }
    const clickedItem = parseInt(event.currentTarget.dataset.order || "0");
    const position = challenge.indexOf(clickedItem);
    const neighboars = [
      position - 1,
      position + 1,
      position - Board_Dimension,
      position + Board_Dimension,
    ];
    const emptyIndex = challenge.indexOf(0);
    if (neighboars.includes(emptyIndex)) {
      const newChallenge = [...challenge];
      newChallenge[emptyIndex] = clickedItem;
      newChallenge[position] = 0;
      setChallenge(newChallenge);
      setRows(chunkArray(newChallenge, Board_Dimension));
      setMoves(moves + 1);
    }
  };

  const StartGame = () => {
    const shuffledArray = shuffleArray(challenge);
    setChallenge(shuffledArray);
    setRows(chunkArray(shuffledArray, Board_Dimension));
    setMoves(0);
    setIsGameStarted(true);
  };

  React.useEffect(() => {
    if (isGameStarted) {
      const isSolved = JSON.stringify(challenge) === JSON.stringify(Board);
      console.log(isSolved);
      if (isSolved) {
        WebApp.showAlert("You Won!");
        setMoves(0);
        setIsGameStarted(false);
      }
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challenge, isGameStarted]);

  return (
    <div className="game">
      {Board_Dimension}x{Board_Dimension} Moves : {moves}
      <div className="board">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((item, columnIndex) => (
              <PuzzleItems
                onClick={onItemClick}
                key={columnIndex}
                order={item}
              />
            ))}
          </div>
        ))}
      </div>
      {!isGameStarted && (
        <>
          <div>
            <h3>Rules:</h3>
            <p>Click on a tile to move it to the empty space</p>
          </div>

          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <div style={{ display: "flex" }}>
              <TonConnectButton />
            </div>
            {address && (
              <div style={{ display: "flex", flex: 1 }}>
                <button
                  className="go3974562317 go3032365164 shuffle-button"
                  onClick={() => StartGame()}
                >
                  <div className="go1487791704">Start Game</div>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
