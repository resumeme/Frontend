import { Position } from '../position';

export type FollowInfo = {
  followId: number;
  mentorInfo: {
    id: number;
    imageUrl: number;
    nickname: string;
    experiencedPositions: Position[];
    careerContent: string;
    careerYear: number;
    introduce: string;
  };
};

export type FollowId = { id: number };
