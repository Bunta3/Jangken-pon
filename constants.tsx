import React from 'react';
import { Hand, Opponent, OpponentType } from './types';

export const RockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M85,60 C95,45 80,20 60,25 C40,15 20,30 25,50 C15,65 30,85 50,80 C70,90 90,75 85,60 Z"/>
  </svg>
);

export const PaperIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/>
  </svg>
);

export const ScissorsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.25,7.25a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Zm12,0a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0ZM12.6,12l4.9-4.9a.75.75,0,0,0-1-1L12,11,7.5,6.5a.75.75,0,0,0-1,1L11.4,12,6.5,16.9a.75.75,0,0,0,1,1L12,13l4.5,4.5a.75.75,0,0,0,1-1Z"/>
  </svg>
);


const OniIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="40" width="50" height="40" rx="10" fill="#9333ea"/>
        <circle cx="50" cy="30" r="20" fill="#a855f7"/>
        <path d="M40 15 L35 5 L45 15 Z" fill="#facc15"/>
        <path d="M60 15 L65 5 L55 15 Z" fill="#facc15"/>
        <circle cx="42" cy="30" r="4" fill="white"/>
        <circle cx="58" cy="30" r="4" fill="white"/>
        <circle cx="42" cy="30" r="2" fill="black"/>
        <circle cx="58" cy="30" r="2" fill="black"/>
        <line x1="45" y1="40" x2="55" y2="40" stroke="white" strokeWidth="2"/>
        <rect x="10" y="50" width="10" height="40" rx="5" fill="#ca8a04"/>
        <circle cx="15" cy="45" r="3" fill="#ca8a04"/>
        <circle cx="15" cy="65" r="3" fill="#ca8a04"/>
        <circle cx="15" cy="85" r="3" fill="#ca8a04"/>
        <rect x="30" y="80" width="15" height="10" rx="5" fill="#a855f7"/>
        <rect x="55" y="80" width="15" height="10" rx="5" fill="#a855f7"/>
    </svg>
);

const NekoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="45" width="50" height="40" rx="20" fill="#ec4899"/>
      <circle cx="50" cy="35" r="25" fill="#f9a8d4"/>
      <path d="M30 15 L25 5 L40 20 Z" fill="#ec4899"/>
      <path d="M70 15 L75 5 L60 20 Z" fill="#ec4899"/>
      <circle cx="42" cy="35" r="5" fill="white"/>
      <circle cx="58" cy="35" r="5" fill="white"/>
      <circle cx="42" cy="35" r="2" fill="black"/>
      <circle cx="58" cy="35" r="2" fill="black"/>
      <path d="M50 45 Q 52 48 50 50 Q 48 48 50 45" fill="#db2777"/>
      <line x1="25" y1="40" x2="35" y2="42" stroke="#db2777" strokeWidth="2" strokeLinecap="round"/>
      <line x1="26" y1="45" x2="36" y2="46" stroke="#db2777" strokeWidth="2" strokeLinecap="round"/>
      <line x1="65" y1="42" x2="75" y2="40" stroke="#db2777" strokeWidth="2" strokeLinecap="round"/>
      <line x1="64" y1="46" x2="74" y2="45" stroke="#db2777" strokeWidth="2" strokeLinecap="round"/>
      <rect x="30" y="85" width="15" height="10" rx="5" fill="#f9a8d4"/>
      <rect x="55" y="85" width="15" height="10" rx="5" fill="#f9a8d4"/>
      <path d="M75 60 Q 85 70 75 80" stroke="#ec4899" strokeWidth="5" fill="none" strokeLinecap="round"/>
    </svg>
);

const KaniIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="65" rx="40" ry="25" fill="#f97316"/>
        <rect x="20" y="85" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="35" y="90" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="55" y="90" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="70" y="85" width="10" height="10" rx="5" fill="#ea580c"/>
        <circle cx="35" cy="50" r="10" fill="#fb923c"/>
        <circle cx="65" cy="50" r="10" fill="#fb923c"/>
        <circle cx="35" cy="50" r="7" fill="white"/>
        <circle cx="65" cy="50" r="7" fill="white"/>
        <circle cx="35" cy="50" r="3" fill="black"/>
        <circle cx="65" cy="50" r="3" fill="black"/>
        <path d="M15 60 C 0 50 0 30 20 30 L 30 40 Z" fill="#ea580c"/>
        <path d="M85 60 C 100 50 100 30 80 30 L 70 40 Z" fill="#ea580c"/>
    </svg>
);

const KaniRockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="65" rx="40" ry="25" fill="#f97316"/>
        <circle cx="35" cy="50" r="10" fill="#fb923c"/>
        <circle cx="65" cy="50" r="10" fill="#fb923c"/>
        <circle cx="35" cy="50" r="7" fill="white"/>
        <circle cx="65" cy="50" r="7" fill="white"/>
        <circle cx="35" cy="50" r="3" fill="black"/>
        <circle cx="65" cy="50" r="3" fill="black"/>
    </svg>
);

const KaniScissorsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="65" rx="40" ry="25" fill="#f97316"/>
        <rect x="20" y="85" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="35" y="90" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="55" y="90" width="10" height="10" rx="5" fill="#ea580c"/>
        <rect x="70" y="85" width="10" height="10" rx="5" fill="#ea580c"/>
        <circle cx="35" cy="50" r="10" fill="#fb923c"/>
        <circle cx="65" cy="50" r="10" fill="#fb923c"/>
        <circle cx="35" cy="50" r="7" fill="white"/>
        <circle cx="65" cy="50" r="7" fill="white"/>
        <circle cx="35" cy="50" r="3" fill="black"/>
        <circle cx="65" cy="50" r="3" fill="black"/>
        <path d="M15 60 C 0 50 0 30 20 30 L 30 40 Z" fill="#ea580c"/>
        <path d="M70 45 C 80 30 95 30 95 20" stroke="#ea580c" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M70 45 C 85 55 95 50 98 40" stroke="#ea580c" strokeWidth="12" fill="none" strokeLinecap="round"/>
    </svg>
);

const KaniPaperIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="65" rx="40" ry="25" fill="#f97316"/>
        <circle cx="35" cy="50" r="10" fill="#fb923c"/>
        <circle cx="65" cy="50" r="10" fill="#fb923c"/>
        <circle cx="35" cy="50" r="7" fill="white"/>
        <circle cx="65" cy="50" r="7" fill="white"/>
        <circle cx="35" cy="50" r="3" fill="black"/>
        <circle cx="65" cy="50" r="3" fill="black"/>
        <rect x="10" y="85" width="25" height="10" rx="5" fill="#ea580c" transform="rotate(-20 10 90)"/>
        <rect x="25" y="90" width="25" height="10" rx="5" fill="#ea580c" transform="rotate(-10 25 95)"/>
        <rect x="50" y="90" width="25" height="10" rx="5" fill="#ea580c" transform="rotate(10 75 95)"/>
        <rect x="65" y="85" width="25" height="10" rx="5" fill="#ea580c" transform="rotate(20 90 90)"/>
        <rect x="5" y="30" width="40" height="12" rx="6" fill="#ea580c" transform="rotate(-45 25 36)"/>
        <rect x="55" y="30" width="40" height="12" rx="6" fill="#ea580c" transform="rotate(45 75 36)"/>
    </svg>
);

export const HANDS: { [key in Hand]: { label: string; Icon: React.FC<{ className?: string }>; color: string } } = {
  rock: { label: 'グー', Icon: RockIcon, color: 'bg-rose-500 hover:bg-rose-600' },
  paper: { label: 'パー', Icon: PaperIcon, color: 'bg-amber-500 hover:bg-amber-600' },
  scissors: { label: 'チョキ', Icon: ScissorsIcon, color: 'bg-cyan-500 hover:bg-cyan-600' },
};

export const KANI_HANDS: { [key in Hand]: { Icon: React.FC<{ className?: string }> } } = {
  rock: { Icon: KaniRockIcon },
  paper: { Icon: KaniPaperIcon },
  scissors: { Icon: KaniScissorsIcon },
};

export const OPPONENTS: { [key in OpponentType]: Opponent } = {
  oni: {
    id: 'oni',
    name: '鬼',
    description: '',
    Icon: OniIcon,
    color: 'border-purple-500'
  },
  neko: {
    id: 'neko',
    name: '猫',
    description: '',
    Icon: NekoIcon,
    color: 'border-pink-500'
  },
  kani: {
    id: 'kani',
    name: 'カニ',
    description: '',
    Icon: KaniIcon,
    color: 'border-orange-500'
  },
};
