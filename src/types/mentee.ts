import { Position } from './position';

type EditMentee = {
  nickname: string;
  phoneNumber: string;
  interestedPositions: Position[];
  interestedFields: string[];
  introduce: string;
};

export type { EditMentee };
