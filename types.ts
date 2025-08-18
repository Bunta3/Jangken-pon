
export type Hand = 'rock' | 'paper' | 'scissors';
export type OpponentType = 'oni' | 'neko' | 'kani';
export type GameState = 'selection' | 'playing' | 'result';
export type RoundResult = 'win' | 'lose' | 'draw' | null;
export type FinalResult = 'win' | 'lose' | 'draw' | null;

export interface RoundHistoryItem {
  round: number;
  userHand: Hand;
  opponentHand: Hand;
  result: RoundResult;
}

export interface Opponent {
  id: OpponentType;
  name: string;
  description: string;
  color: string;
  Icon: React.FC<{ className?: string }>;
}
