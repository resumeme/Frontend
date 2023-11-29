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

type FollowId = { id: number };

export type { FollowInfo, FollowId };
