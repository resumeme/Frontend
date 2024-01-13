import { Position } from './position';

type BaseMentor = {
  nickname: string;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce: string;
};

export type ReadMentor = BaseMentor & {
  imageUrl: string;
  role: string;
};

export type EditMentor = BaseMentor & {
  phoneNumber: string;
};
