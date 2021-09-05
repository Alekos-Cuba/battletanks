/* eslint-disable react-hooks/exhaustive-deps */
import "./../css/battleground.css";
import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import ClickableTile from "./ClickableTile";
import gameManager from "../scripts/GameManager";
import AI from "../scripts/AI";
import Human from "../scripts/Human";
import ScoreScreen from "./ScoreScreen";
import BattlegroundFooter from "./BattlegroundFooter";

function Battleground() {
  const [playerUnitCount, setPlayerUnitCount] = useState(0);
  const [aiUnitCount, setAiUnitCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  let playerTiles = new Map();

  useEffect(() => {
    gameManager.initializeGame();
    setPlayerUnitCount(Human.units.size);
    setAiUnitCount(AI.units.size);
    setPlayerUnitsOnBoard();
  }, []);

  const tileClicked = (unitWasHit) => {
    if (unitWasHit) {
      setAiUnitCount(AI.units.size);
    }
    //check win condition after human has played
    checkWinCondition();
    let aiShot = gameManager.makeAiPlay();
    setPlayerUnitCount(Human.units.size);
    //if AI hit a player unit, change the tile class
    let hitTile = playerTiles.get(aiShot[0].join(",")).current;
    aiShot[1] === true
      ? hitTile.classList.toggle("tile-player-unit-destroyed")
      : hitTile.classList.toggle("tile-unit-miss");
    //check win condition again after AI has played
    checkWinCondition();
  };

  const checkWinCondition = () => {
    let winner = gameManager.getWinner();
    if (winner !== gameManager.playerTypes.None) {
      setTimeout(function () {
        setShowScore(true);
      }, 500);
    }
  };

  const setPlayerUnitsOnBoard = () => {
    for (let i = 0; i < gameManager.boardSizeY; i++) {
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        if (Human.hasUnitAtCoordinates([i, j])) {
          playerTiles
            .get(`${i},${j}`)
            .current.classList.toggle("tile-player-unit");
        }
      }
    }
  };

  const createBoard = (unitType) => {
    let tilesRow = [];
    const fullTiles = [];
    for (let i = 0; i < gameManager.boardSizeY; i++) {
      tilesRow = [];
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        if (unitType === gameManager.playerTypes.AI) {
          tilesRow.push(
            <ClickableTile
              key={`${i}_${j}`}
              coords={[i, j]}
              onTileClicked={tileClicked}
            ></ClickableTile>
          );
        } else {
          const ref = React.createRef();
          tilesRow.push(
            <Tile key={`${i}_${j}`} ref={ref} coords={[i, j]}></Tile>
          );
          playerTiles.set(`${i},${j}`, ref);
        }
      }
      fullTiles.push(
        <div key={`row${i}`} className="bg-board-tiles-container">
          {tilesRow}
        </div>
      );
    }
    return fullTiles;
  };

  return (
    <div className="battleground">
      <div className="bg-board-container">
        <div className="bg-board">
          {createBoard(gameManager.playerTypes.Human)}
        </div>
        <div className="bg-board">
          {createBoard(gameManager.playerTypes.AI)}
        </div>
      </div>
      <BattlegroundFooter
        aiUnits={aiUnitCount}
        playerUnits={playerUnitCount}
      ></BattlegroundFooter>
      {showScore ? <ScoreScreen></ScoreScreen> : ""}
    </div>
  );
}

export default Battleground;
