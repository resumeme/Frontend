export type FeedbackComment = {
  commentId: number;
  content: string;
  componentId: number;
  lastModifiedAt: string;
};

export type Feedback = {
  commentResponses: FeedbackComment[];
  overallReview: string | null;
  mentorId: string;
};
