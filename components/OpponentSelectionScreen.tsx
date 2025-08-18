
import React from 'react';
import { OpponentType, Opponent } from '../types';
import { OPPONENTS } from '../constants';

interface OpponentSelectionScreenProps {
  onSelect: (opponentId: OpponentType) => void;
}

const OpponentCard: React.FC<{ opponent: Opponent; onSelect: () => void }> = ({ opponent, onSelect }) => (
  <div className={`bg-slate-800 rounded-2xl shadow-lg overflow-hidden border-4 ${opponent.color} transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}>
    <div className="p-8 flex flex-col items-center text-center">
      <opponent.Icon className="w-32 h-32 mb-4" />
      <h3 className="text-3xl font-bold text-slate-100 mb-2">{opponent.name}</h3>
      <p className="text-slate-400 mb-6 h-12">{opponent.description}</p>
      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-bold text-lg text-white transition-colors duration-300 ${opponent.color.replace('border-', 'bg-').replace('-500', '-600')} hover:${opponent.color.replace('border-', 'bg-').replace('-500', '-700')}`}
      >
        この相手を選ぶ
      </button>
    </div>
  </div>
);

const OpponentSelectionScreen: React.FC<OpponentSelectionScreenProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-500">じゃんけん勝負！</h1>
      <h2 className="text-2xl text-slate-300 mb-12">対戦相手を選択してね</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <OpponentCard opponent={OPPONENTS.oni} onSelect={() => onSelect('oni')} />
        <OpponentCard opponent={OPPONENTS.kani} onSelect={() => onSelect('kani')} />
        <OpponentCard opponent={OPPONENTS.neko} onSelect={() => onSelect('neko')} />
      </div>
    </div>
  );
};

export default OpponentSelectionScreen;
