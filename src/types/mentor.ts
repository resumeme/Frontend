import { Position } from './position';

type BaseMentor = {
  nickname: string;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce: string;
};

type ReadMentor = BaseMentor & {
  imageUrl: string;
  role: string;
};

type EditMentor = BaseMentor & {
  phoneNumber: string;
};

export type { ReadMentor, EditMentor };
