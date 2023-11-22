import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackView } from '~/components/molecules/FeedbackView';
import { FeedbackComment } from '~/types/event/feedback';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { Categories } from '~/types/resume/categories';

type FeedbackResumeDetailsProps<T extends Categories> = {
  arrayData: T[];
  commentsData: FeedbackComment[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  isAuthorizedMentor?: boolean;
};

const FeedbackResumeDetails = <T extends Categories>({
  arrayData,
  DetailsComponent,
  commentsData,
  isAuthorizedMentor = false,
}: FeedbackResumeDetailsProps<T>) => {
  const indexedComments = getIndexedComments(commentsData);
  const commentComponentIds = Object.keys(indexedComments);
  return (
    <>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => {
            const currentBlockId = data.componentId as string;
            const targetComment: FeedbackComment = indexedComments[currentBlockId];
            const hasComment = commentComponentIds.includes(currentBlockId);
            return (
              <React.Fragment key={index}>
                <Box position={'relative'}>
                  <DetailsComponent
                    data={data}
                    isCurrentUser={false}
                  />
                  {hasComment && (
                    <FeedbackView
                      commentId={targetComment.commentId}
                      componentId={targetComment.componentId}
                      lastModifiedAt={targetComment.lastModifiedAt}
                      content={targetComment.content}
                      isAuthorizedMentor={isAuthorizedMentor}
                    />
                  )}
                </Box>
                {index !== arrayData.length - 1 && (
                  <Divider
                    my={'3rem'}
                    borderColor={'gray.300'}
                  />
                )}
              </React.Fragment>
            );
          })}
        </BorderBox>
      )}
    </>
  );
};

export default FeedbackResumeDetails;

const getIndexedComments = (commentsData: FeedbackComment[]) => {
  const indexedComments: { [blockId: string]: FeedbackComment } = {};
  commentsData.forEach((commentItem) => {
    const componentId = commentItem.componentId;
    indexedComments[componentId] = commentItem;
  });
  return indexedComments;
};