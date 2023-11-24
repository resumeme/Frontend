import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackView } from '~/components/molecules/FeedbackView';
import FeedbackBlock from '~/components/templates/FeedbackResumeTemplate/FeedbackBlock';
import { FeedbackComment } from '~/types/event/feedback';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { ReadCategories } from '~/types/resume/categories';
import { getIndexedCommentsObject } from '~/utils/getIndexedCommentsObject';

type FeedbackCategoryDetailsProps<T extends ReadCategories> = {
  arrayData: T[];
  commentsData: FeedbackComment[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  isAuthorizedMentor?: boolean;
  isFeedbackPage?: boolean;
};

const FeedbackCategoryDetails = <T extends ReadCategories>({
  arrayData,
  DetailsComponent,
  commentsData,
  isAuthorizedMentor = false,
  isFeedbackPage = false,
}: FeedbackCategoryDetailsProps<T>) => {
  const indexedComments = getIndexedCommentsObject(commentsData);
  const commentComponentIds = Object.keys(indexedComments).map((index) => parseInt(index));

  return (
    <>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => {
            const currentBlockId = data.componentId;
            const targetComments: FeedbackComment[] = indexedComments[currentBlockId];
            const hasComment = commentComponentIds.includes(currentBlockId);
            return (
              <React.Fragment key={index}>
                <Box
                  position={'relative'}
                  role="group"
                  pb={7}
                >
                  <DetailsComponent
                    data={data}
                    isCurrentUser={false}
                  />
                  {hasComment && (
                    <>
                      {targetComments.map((currentComment) => (
                        <FeedbackView
                          key={currentComment.commentId}
                          commentId={currentComment.commentId}
                          lastModifiedAt={currentComment.lastModifiedAt}
                          content={currentComment.content}
                          isAuthorizedMentor={isAuthorizedMentor}
                        />
                      ))}
                    </>
                  )}
                  {isFeedbackPage && <FeedbackBlock blockId={data.componentId} />}
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

export default FeedbackCategoryDetails;
