import { Divider, Box } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { AccordionToggle } from '~/components/atoms/AccordionToggle';
import { BorderBox } from '~/components/atoms/BorderBox';
import { FeedbackView } from '~/components/molecules/FeedbackView';
import { FeedbackComment } from '~/types/event/feedback';
import { DetailsComponentProps } from '~/types/props/detailsComponentProps';
import { FormComponentProps } from '~/types/props/formComponentProps';
import { ReadCategories } from '~/types/resume/categories';
import { getIndexedCommentsObject } from '~/utils/getIndexedCommentsObject';

type CategoryDetailsProps<T extends ReadCategories> = {
  arrayData: T[];
  commentsData: FeedbackComment[];
  DetailsComponent: React.ComponentType<DetailsComponentProps<T>>;
  FormComponent?: React.ComponentType<FormComponentProps<T>>;
  isCurrentUser: boolean;
};

const FeedbackCategoryReflectDetails = <T extends ReadCategories>({
  arrayData,
  commentsData,
  DetailsComponent,
  FormComponent,
  isCurrentUser,
}: CategoryDetailsProps<T>) => {
  const [editTargetIndex, setEditTargetIndex] = useState<number | null>(null);
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
                {editTargetIndex === index && FormComponent ? (
                  <FormComponent
                    defaultValues={{ ...data, id: undefined }}
                    isEdit
                    blockId={data.componentId}
                    quitEdit={() => setEditTargetIndex(null)}
                  />
                ) : (
                  <Box
                    position={'relative'}
                    role="group"
                  >
                    <DetailsComponent
                      data={data}
                      onEdit={() => setEditTargetIndex(index)}
                      isCurrentUser={isCurrentUser}
                    />
                  </Box>
                )}
                {/**NOTE - 첨삭 코멘트 id와 현재 블럭 id 비교 후 일치하면 아래를 렌더링 */}
                <AccordionToggle text="첨삭 코멘트가 달려있어요! (੭˙ ˘ ˙)੭">
                  {hasComment && (
                    <>
                      {targetComments.map((currentComment) => (
                        <FeedbackView
                          key={currentComment.commentId}
                          commentId={currentComment.commentId}
                          lastModifiedAt={currentComment.lastModifiedAt}
                          content={currentComment.content}
                        />
                      ))}
                    </>
                  )}
                </AccordionToggle>
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

export default FeedbackCategoryReflectDetails;
