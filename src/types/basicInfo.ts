import { Position } from './position';

export type BasicInfo = {
  title?: string;
  position: Position;
  skills: string[];
  introduce: string;
  ownerInfo?: {
    id: number;
    name: string;
    phoneNumber: string;
  };
};
