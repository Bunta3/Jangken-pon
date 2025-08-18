
import React, { useState, useCallback } from 'react';
import { GameState, OpponentType, FinalResult, RoundHistoryItem } from './types';
import OpponentSelectionScreen from './components/OpponentSelectionScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import { OPPONENTS } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('selection');
  const [selectedOpponent, setSelectedOpponent] = useState<OpponentType | null>(null);
  const [finalResult, setFinalResult] = useState<FinalResult>(null);
  const [history, setHistory] = useState<RoundHistoryItem[]>([]);

  const handleOpponentSelect = useCallback((opponentId: OpponentType) => {
    setSelectedOpponent(opponentId);
    setGameState('playing');
    setHistory([]);
    setFinalResult(null);
  }, []);

  const handleGameEnd = useCallback((userScore: number, opponentScore: number, gameHistory: RoundHistoryItem[]) => {
    if (userScore > opponentScore) {
      setFinalResult('win');
    } else if (opponentScore > userScore) {
      setFinalResult('lose');
    } else {
      setFinalResult('draw');
    }
    setHistory(gameHistory);
    setGameState('result');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameState('selection');
    setSelectedOpponent(null);
    setHistory([]);
    setFinalResult(null);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'playing':
        if (selectedOpponent) {
          const opponent = OPPONENTS[selectedOpponent];
          return <GameScreen opponent={opponent} onGameEnd={handleGameEnd} />;
        }
        return null; // Should not happen
      case 'result':
        if (selectedOpponent) {
            const opponent = OPPONENTS[selectedOpponent];
            return <ResultScreen result={finalResult} history={history} onPlayAgain={handlePlayAgain} opponent={opponent} />;
        }
        return null; // Should not happen
      case 'selection':
      default:
        return <OpponentSelectionScreen onSelect={handleOpponentSelect} />;
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-slate-900 text-slate-100 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;
