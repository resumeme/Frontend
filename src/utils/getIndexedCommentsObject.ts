import { FeedbackComment } from '~/types/event/feedback';

export const getIndexedCommentsObject = (commentsData: FeedbackComment[]) => {
  const indexedComments: { [blockId: string]: FeedbackComment[] } = {};
  commentsData.forEach((commentItem) => {
    const componentId = commentItem.componentId;
    if (!indexedComments[componentId]) {
      indexedComments[componentId] = [{ ...commentItem }];
      return;
    }
    indexedComments[componentId].push({ ...commentItem });
  });
  return indexedComments;
};
