import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackView } from '~/components/molecules/FeedbackView';
import FeedbackBlock from '~/components/organisms/FeedbackBlock/FeedbackBlock';
import { FeedbackComment } from '~/types/event/feedback';
import { ReadMentor } from '~/types/mentor';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { ReadCategories } from '~/types/resume/categories';
import { getIndexedCommentsObject } from '~/utils/getIndexedCommentsObject';

type FeedbackCategoryDetailsProps<T extends ReadCategories> = {
  arrayData: T[];
  commentsData: FeedbackComment[];
  mentorData: Pick<ReadMentor, 'imageUrl' | 'nickname'>;
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  isAuthorizedMentor?: boolean;
  isFeedbackPage?: boolean;
};

const FeedbackCategoryDetails = <T extends ReadCategories>({
  arrayData,
  DetailsComponent,
  commentsData,
  mentorData,
  isAuthorizedMentor = false,
  isFeedbackPage = false,
}: FeedbackCategoryDetailsProps<T>) => {
  const indexedComments = getIndexedCommentsObject(commentsData);
  return (
    <>
      {arrayData?.length > 0 && (
        <BorderBox variant={'wide'}>
          {arrayData.map((data: T, index: number) => {
            const currentBlockId = data.componentId;
            const currentComments: FeedbackComment[] = indexedComments[currentBlockId];
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
                  {currentComments && (
                    <>
                      {currentComments.map((currentComment) => (
                        <FeedbackView
                          key={currentComment.commentId}
                          commentId={currentComment.commentId}
                          lastModifiedAt={currentComment.lastModifiedAt}
                          content={currentComment.content}
                          isAuthorizedMentor={isAuthorizedMentor}
                          mentorData={mentorData}
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
