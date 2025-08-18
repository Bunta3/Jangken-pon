import React from 'react';
import { FinalResult, RoundHistoryItem, Opponent } from '../types';
import { HANDS, KANI_HANDS } from '../constants';

interface ResultScreenProps {
  result: FinalResult;
  history: RoundHistoryItem[];
  opponent: Opponent;
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, history, opponent, onPlayAgain }) => {
  const resultText = {
    win: 'あなたの勝ち！',
    lose: 'あなたの負け...',
    draw: '引き分け',
  };

  const resultColor = {
    win: 'text-cyan-400',
    lose: 'text-rose-500',
    draw: 'text-amber-400',
  };
  
  const totalScores = history.reduce((acc, item) => {
    if (item.result === 'win') acc.user++;
    if (item.result === 'lose') acc.opponent++;
    return acc;
  }, {user: 0, opponent: 0});

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-slate-300">結果発表</h1>
      <h2 className={`text-6xl font-extrabold mb-8 ${result ? resultColor[result] : ''}`}>
        {result ? resultText[result] : '...'}
      </h2>
      
      <div className="text-3xl font-bold mb-6">
        <span className="text-cyan-400">{totalScores.user}</span> - <span className={opponent.color.replace('border-', 'text-')}>{totalScores.opponent}</span>
      </div>

      <div className="w-full mb-8 bg-slate-900/50 rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4 text-slate-400">対戦履歴</h3>
        <div className="space-y-2">
          {history.map(item => {
            const UserHandIcon = HANDS[item.userHand].Icon;
            const OpponentHandIcon = opponent.id === 'kani'
                ? KANI_HANDS[item.opponentHand].Icon
                : HANDS[item.opponentHand].Icon;
            return (
              <div key={item.round} className="flex justify-between items-center bg-slate-700 p-3 rounded-md">
                <span className="font-bold text-slate-400">R{item.round}</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200">YOU</span>
                  <UserHandIcon className="w-6 h-6 text-slate-200" />
                </div>
                <div className="font-bold text-lg w-16">
                  {item.result === 'win' && <span className="text-cyan-400">WIN</span>}
                  {item.result === 'lose' && <span className="text-rose-500">LOSE</span>}
                  {item.result === 'draw' && <span className="text-amber-400">DRAW</span>}
                </div>
                <div className="flex items-center gap-2">
                  <OpponentHandIcon className={`w-6 h-6 ${opponent.color.replace('border-', 'text-')}`} />
                  <span className={`${opponent.color.replace('border-', 'text-')}`}>{opponent.name.split(' ')[0]}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <button
        onClick={onPlayAgain}
        className="py-4 px-10 rounded-lg font-bold text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        もう一度遊ぶ
      </button>
    </div>
  );
};

export default ResultScreen;