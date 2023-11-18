import { Position } from './position';

type ReadMentor = {
  imageUrl: string;
  nickname: string;
  role: string;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce: string;
};

type EditMentor = {
  nickname: string;
  phoneNumber: string;
  experiencedPositions: Position[];
  careerContent: string;
  careerYear: number;
  introduce: string;
};

export type { ReadMentor, EditMentor };
