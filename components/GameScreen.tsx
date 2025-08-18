import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Hand, RoundResult, Opponent, RoundHistoryItem } from '../types';
import { HANDS, KANI_HANDS } from '../constants';

interface GameScreenProps {
  opponent: Opponent;
  onGameEnd: (userScore: number, opponentScore: number, history: RoundHistoryItem[]) => void;
}

const handKeys: Hand[] = ['rock', 'paper', 'scissors'];

const getRoundResult = (userHand: Hand, opponentHand: Hand): RoundResult => {
  if (userHand === opponentHand) return 'draw';
  if (
    (userHand === 'rock' && opponentHand === 'scissors') ||
    (userHand === 'paper' && opponentHand === 'rock') ||
    (userHand === 'scissors' && opponentHand === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
};

const getOpponentHand = (opponentId: string, userHand: Hand, kaniNextMove: Hand): Hand => {
  switch (opponentId) {
    case 'oni':
      return handKeys[(handKeys.indexOf(userHand) + 1) % 3];
    case 'neko':
      return handKeys[(handKeys.indexOf(userHand) + 2) % 3];
    case 'kani':
    default:
      return kaniNextMove;
  }
};

const ResultIndicator: React.FC<{ result: RoundResult }> = ({ result }) => {
  if (!result) return <div className="h-20 w-20"></div>;

  switch (result) {
    case 'win':
      return <div className="text-9xl text-cyan-400 font-black animate-ping-once">〇</div>;
    case 'lose':
      return <div className="text-9xl text-rose-500 font-black animate-ping-once">×</div>;
    case 'draw':
      return <div className="text-5xl text-amber-400 font-bold animate-pulse">あいこ</div>;
    default:
      return <div className="h-20 w-20"></div>;
  }
};

const GameScreen: React.FC<GameScreenProps> = ({ opponent, onGameEnd }) => {
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({ user: 0, opponent: 0 });
  const [history, setHistory] = useState<RoundHistoryItem[]>([]);
  const [userChoice, setUserChoice] = useState<Hand | null>(null);
  const [opponentChoice, setOpponentChoice] = useState<Hand | null>(null);
  const [roundResult, setRoundResult] = useState<RoundResult>(null);
  const [isRoundFinished, setIsRoundFinished] = useState(false);
  const [flashingHand, setFlashingHand] = useState<Hand>('rock');
  const [kaniNextMove, setKaniNextMove] = useState<Hand>('rock');

  useEffect(() => {
    if (opponent.id === 'kani') {
      const nextMove = handKeys[Math.floor(Math.random() * 3)];
      setKaniNextMove(nextMove);
    }
  }, [round, opponent.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isRoundFinished) {
      interval = setInterval(() => {
        setFlashingHand(prev => handKeys[(handKeys.indexOf(prev) + 1) % 3]);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRoundFinished]);
  
  const handlePlay = useCallback((playedHand: Hand) => {
    if (isRoundFinished) return;

    const oppHand = getOpponentHand(opponent.id, playedHand, kaniNextMove);
    const result = getRoundResult(playedHand, oppHand);

    setUserChoice(playedHand);
    setOpponentChoice(oppHand);
    setRoundResult(result);
    setIsRoundFinished(true);

    let newScores = { ...scores };
    if (result === 'win') newScores.user++;
    if (result === 'lose') newScores.opponent++;
    setScores(newScores);

    const newHistoryItem: RoundHistoryItem = { round, userHand: playedHand, opponentHand: oppHand, result };
    const updatedHistory = [...history, newHistoryItem];
    setHistory(updatedHistory);

    setTimeout(() => {
      if (round >= 3) {
        onGameEnd(newScores.user, newScores.opponent, updatedHistory);
      } else {
        setRound(prev => prev + 1);
        setUserChoice(null);
        setOpponentChoice(null);
        setRoundResult(null);
        setIsRoundFinished(false);
      }
    }, 2500);
  }, [isRoundFinished, opponent.id, kaniNextMove, scores, round, history, onGameEnd]);
  
  const opponentDisplayHand = isRoundFinished ? opponentChoice : flashingHand;
  const OpponentHandIcon = opponent.id === 'kani'
    ? KANI_HANDS[opponentDisplayHand!].Icon
    : HANDS[opponentDisplayHand!].Icon;
  const UserHandIcon = userChoice ? HANDS[userChoice].Icon : null;


  return (
    <div className="flex flex-col items-center justify-between w-full min-h-[80vh]">
      {/* Opponent Area */}
      <div className="flex flex-col items-center">
        <div className={`p-4 rounded-full border-4 ${opponent.color} mb-4`}>
          <opponent.Icon className="w-24 h-24" />
        </div>
        <div className="bg-slate-800 rounded-lg p-4 w-48 h-48 flex items-center justify-center shadow-inner">
          <OpponentHandIcon className={`w-36 h-36 text-slate-500 transition-transform duration-100 ${isRoundFinished ? 'scale-110' : ''}`} />
        </div>
      </div>

      {/* Result Area */}
      <div className="flex flex-col items-center justify-center my-4 h-32">
        <h2 className="text-3xl font-bold mb-4">ROUND {round} / 3</h2>
        {isRoundFinished && <ResultIndicator result={roundResult} />}
      </div>

      {/* Player Area */}
      <div className="flex flex-col items-center w-full">
         <div className="bg-slate-800 rounded-lg p-4 w-48 h-48 flex items-center justify-center shadow-inner mb-6">
          {UserHandIcon && <UserHandIcon className="w-36 h-36 text-slate-200" />}
        </div>
        <div className="flex justify-center gap-4 md:gap-8 w-full">
          {handKeys.map(hand => {
            const { label, Icon, color } = HANDS[hand];
            return (
              <button
                key={hand}
                onClick={() => handlePlay(hand)}
                disabled={isRoundFinished}
                className={`flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl shadow-lg transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed ${color} ${!isRoundFinished ? 'hover:-translate-y-2' : ''}`}
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 text-white mb-1" />
                <span className="text-lg md:text-xl font-bold text-white">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;