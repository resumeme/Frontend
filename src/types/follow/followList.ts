import { Position } from '../position';

type FollowInfo = {
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

export type { FollowInfo };
