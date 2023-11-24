type FeedbackComment = {
  commentId: number;
  content: string;
  componentId: number;
  lastModifiedAt: string;
};

type Feedback = {
  commentResponses: FeedbackComment[];
  overallReview: string | null;
  mentorId: string;
};

export type { FeedbackComment, Feedback };
